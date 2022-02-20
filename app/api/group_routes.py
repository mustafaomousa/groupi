from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, Group
from app.forms import GroupForm

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

group_routes = Blueprint('groups', __name__)


@group_routes.route('/', methods=['POST'])
# @login_required
def new_group():
    form = GroupForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        group = Group(
            name=form.data['name'],
            bio=form.data['bio'],
            header_picture=form.data['header_picture'],
            profile_picture=form.data['profile_picture'],
            admin_id=current_user.id,
        )
        db.session.add(group)
        db.session.commit()
        return group.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@group_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
# @login_required
def single_group(id):
    group = Group.query.get(id)
    if request.method == 'GET':
        return group.to_dict()
    if request.method == 'PUT':
        form = GroupForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            group.name=form.data['name'] or group.name
            group.bio=form.data['bio'] or group.bio
            group.header_picture=form.data['header_picture'] or group.header_picture
            group.profile_picture=form.data['profile_picture'] or group.profile_picture
            db.session.commit()
            return group.to_dict()
        return {"errors": ["error"]}, 400
    if request.method == 'DELETE':
        deleted_group = group.to_dict()
        db.session.delete(group)
        db.session.commit()
        return deleted_group
