from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class GroupForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    bio = StringField('bio')
    header_picture = StringField('header_picture')
    profile_picture = StringField('profile_picture')