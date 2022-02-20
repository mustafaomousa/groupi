from datetime import datetime
from .db import db

class Friendship(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_1_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user_2_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    requested = db.Column(db.Boolean, nullable=False)
    accepted = db.Column(db.Boolean, nullable=False, default=False)
    created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'user_1_id': self.user_1_id,
            'user_2_id': self.user_2_id,
            'requested': self.requested,
            'accepted': self.accepted,
            'created': self.created,
        }
