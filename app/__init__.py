import os
from flask import Flask
from flask_login import LoginManager
from flask_cors import CORS

from .config import Config

app = Flask(__name__)

login = LoginManager(app)
login.login_view = 'auth.unauthorized'

app.config.from_object(Config)
CORS(app)