"""empty message

Revision ID: c9b556b02999
Revises: e92092cb48a2
Create Date: 2022-02-20 11:27:17.338086

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c9b556b02999'
down_revision = 'e92092cb48a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('friendship', sa.Column('user_id', sa.Integer(), nullable=False))
    op.add_column('friendship', sa.Column('friend_id', sa.Integer(), nullable=False))
    op.drop_constraint('friendship_user_2_id_fkey', 'friendship', type_='foreignkey')
    op.drop_constraint('friendship_user_1_id_fkey', 'friendship', type_='foreignkey')
    op.create_foreign_key(None, 'friendship', 'user', ['friend_id'], ['id'])
    op.create_foreign_key(None, 'friendship', 'user', ['user_id'], ['id'])
    op.drop_column('friendship', 'user_2_id')
    op.drop_column('friendship', 'user_1_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('friendship', sa.Column('user_1_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.add_column('friendship', sa.Column('user_2_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.drop_constraint(None, 'friendship', type_='foreignkey')
    op.drop_constraint(None, 'friendship', type_='foreignkey')
    op.create_foreign_key('friendship_user_1_id_fkey', 'friendship', 'user', ['user_1_id'], ['id'])
    op.create_foreign_key('friendship_user_2_id_fkey', 'friendship', 'user', ['user_2_id'], ['id'])
    op.drop_column('friendship', 'friend_id')
    op.drop_column('friendship', 'user_id')
    # ### end Alembic commands ###
