const SET_GROUP = "session/SET_GROUP";
const SET_MEMBER = "session/SET_MEMBER";

const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});

const setMember = (member) => ({
  type: SET_MEMBER,
  payload: member,
});

const initialState = {};

export const getGroup = (groupId) => async (dispatch) => {
  const response = await fetch(`/api/groups/${groupId}`);

  if (response.ok) {
    const data = await response.json();
    dispatch(setGroup(data));
    return null;
  } else if (response.status < 500) {
    const data = response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error has occured. Please try again."];
  }
};

export const inviteMember = (membership) => async (dispatch) => {
  const { group_id, user_id, requested_message } = membership;

  const response = await fetch(`/api/memberships/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id,
      group_id,
      requested_message,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setMember(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...action.payload,
      };
    case SET_MEMBER:
      return {
        ...state,
        members: {
          ...state.members,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
