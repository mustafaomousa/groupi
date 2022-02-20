from datetime import datetime

from .db import db

class GroupMember(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    group_id = db.Column(db.Integer, db.ForeignKey('group.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    requested = db.Column(db.Boolean, nullable=False)
    requested_message = db.Column(db.String)
    accepted = db.Column(db.Boolean, nullable=False, default=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'group_id': self.group_id,
            'user_id': self.user_id,
            'requested': self.requested,
            'requested_message': self.requested_message,
            'accepted': self.accepted,
            'created': self.created,
            'user': self.user.to_simple_dict(),
            'group': self.group.to_simple_dict()
        }