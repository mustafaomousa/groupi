import socket from "../socket";

const SET_GROUP = "group/SET_GROUP";
const SET_MEMBER = "group/SET_MEMBER";
const ADD_MESSAGE = "group/ADD_MESSAGE";

const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
});

const setMember = (member) => ({
  type: SET_MEMBER,
  payload: member,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

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

export const createGroupMessage = (groupId, message) => async (dispatch) => {
  const response = await fetch(`/api/groups/${groupId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: message,
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addMessage(data));
    socket.emit("message", { message: data, room: groupId });
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

const initialState = {};

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
    case ADD_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
}
