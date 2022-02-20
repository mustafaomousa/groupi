import imp
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), nullable=False, unique=True)
    email = db.Column(db.String(264), nullable=False, unique=True)
    f_name = db.Column(db.String(50), nullable=False)
    l_name = db.Column(db.String(50), nullable=False)
    dob = db.Column(db.Date, nullable=False)
    profile_picture = db.Column(db.Text)
    bio = db.Column(db.Text)
    hashed_password = db.Column(db.String(255), nullable=False)

    @property
    def password(self):
        return self.hashed_password
    
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'f_name': self.f_name,
            'l_name': self.l_name,
            'dob': self.dob,
            'profile_picture': self.profile_picture,
            'bio': self.bio,
        }