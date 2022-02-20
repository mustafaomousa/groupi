from flask import Blueprint
from flask_login import login_required
from app.models import Group

group_routes = Blueprint('groups', __name__)


@group_routes.route('/<int:id>')
# @login_required
def single_group(id):
    group = Group.query.get(id)
    return group.to_dict()
