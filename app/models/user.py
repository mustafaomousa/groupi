from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime

from .db import db

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
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    owned_groups = db.relationship('Group', backref='user', lazy=True)
    group_memberships = db.relationship('GroupMember', backref='user')

    @property
    def password(self):
        return self.hashed_password
    
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_simple_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'f_name': self.f_name,
            'l_name': self.l_name,
            'dob': self.dob,
            'profile_picture': self.profile_picture,
            'bio': self.bio,
            'created': self.created,
        }

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
            'created': self.created,
            'owned_groups': {group.id: group.to_dict() for group in self.owned_groups},
            'joined_groups': {membership.group.id: membership.group.to_dict() for membership in self.group_memberships if membership.accepted == True},
            'pending_requests': {membership.id: membership.to_dict() for membership in self.group_memberships if (membership.accepted == False and membership.requested == True)}
        }