from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class GroupMessageForm(FlaskForm):
    message = StringField('message')