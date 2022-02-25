from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired


class MembershipForm(FlaskForm):
    group_id = IntegerField('group_id')
    user_id = IntegerField('user_id')
    requested = BooleanField('requested')
    accepted = BooleanField('accepted')
    requested_message = StringField('requested_message')