"""empty message

Revision ID: 3fdca3b8368e
Revises: 38f250ce0117
Create Date: 2022-02-26 12:25:34.493284

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3fdca3b8368e'
down_revision = '38f250ce0117'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('group_message', sa.Column('message', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('group_message', 'message')
    # ### end Alembic commands ###
