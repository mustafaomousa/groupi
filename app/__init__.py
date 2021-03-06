import os
from flask import Flask, request, redirect
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_cors import CORS
from flask_wtf.csrf import generate_csrf
from flask_socketio import SocketIO, send, join_room, leave_room

from .config import Config
from .models import db, User
from .api.auth_routes import auth_routes
from .api.user_routes import user_routes
from .api.group_routes import group_routes
from .api.membership_routes import membership_routes

app = Flask(__name__)

socketio = SocketIO(app, cors_allowed_origins="*")
login_manager = LoginManager(app)

@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))

app.config.from_object(Config)
db.init_app(app)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(group_routes, url_prefix='/api/groups')
app.register_blueprint(membership_routes, url_prefix='/api/memberships')
Migrate(app, db)
CORS(app)

if __name__ == '__main__':
    socketio.run(app)

@socketio.on("connect")
def connected():
    print("connected")

@socketio.on("disconnect")
def disconnected():
    print("disconnected")

@socketio.on("join")
def on_join(data):
    room = data['room']
    join_room(room)

@socketio.on("leave")
def on_join(data):
    room = data['room']
    leave_room(room)

@socketio.on("message")
def handle_message(data):
    message = data['message']
    room = data['room']
    send(message, to=room)
    return None

@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_static_file('favicon.ico')
    return app.send_static_file('index.html')
