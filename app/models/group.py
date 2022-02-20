from datetime import datetime
from .db import db

class Group(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    bio = db.Column(db.Text)
    admin_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    header_picture = db.Column(db.Text)
    profile_picture = db.Column(db.Text)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    members = db.relationship('GroupMember', backref='group')

    def to_simple_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'bio': self.bio,
            'admin_id': self.admin_id,
            'header_picture': self.header_picture,
            'profile_picture': self.profile_picture,
            'created': self.created,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'bio': self.bio,
            'admin_id': self.admin_id,
            'header_picture': self.header_picture,
            'profile_picture': self.profile_picture,
            'created': self.created,
            'members': {member.user.id:member.user.to_simple_dict() for member in self.members}
            
        }