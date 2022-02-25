from flask import Blueprint, request
from flask_login import login_required, current_user

from app.models import db, GroupMember, Group
from app.forms import MembershipForm

def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

membership_routes = Blueprint('memberships', __name__)


@membership_routes.route('/', methods=['POST'])
@login_required
def new_membership():
    form = MembershipForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        group = Group.query.get(form.data['group_id'])
        if group:
            membership = GroupMember(
                group_id=form.data['group_id'],
                user_id=form.data['user_id'],
                requested=True,
                accepted=(group.admin_id == form.data['user_id']) or False,
                requested_message=form.data['requested_message']
            )
            db.session.add(membership)
            db.session.commit()
            return {membership.user.id: membership.user.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



@membership_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def single_member(id):
    membership = GroupMember.query.get(id)
    if request.method == 'GET':
        return membership.to_dict()
    if request.method == 'PUT':
        form = MembershipForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            print(form.data)
            membership.group_id=form.data['group_id'] or membership.group_id
            membership.user_id=form.data['user_id'] or membership.user_id
            membership.requested=form.data['requested'] and form.data['requested']
            membership.accepted=form.data['accepted'] or membership.accepted
            membership.requested_message=form.data['requested_message'] or membership.requested_message
            db.session.commit()
            return membership.to_dict()
        return {"errors": ["error"]}, 400
    if request.method == 'DELETE':
        deleted_membership = membership.to_dict()
        db.session.delete(membership)
        db.session.commit()
        return deleted_membership
