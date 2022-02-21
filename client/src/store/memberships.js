const SET_GROUPS = "session/SET_GROUPS";

const setGroups = (groups) => ({
  type: SET_GROUPS,
  payload: groups,
});

const initialState = {};

export const getMemberships = () => async (dispatch) => {
  const response = await fetch("/api/groups/");

  if (response.ok) {
    const data = await response.json();
    dispatch(setGroups(data));
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

export const newGroup = (group) => async (dispatch) => {
  const { name, bio, header_picture, profile_picture } = group;
  const response = await fetch("/api/groups/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      bio,
      profile_picture,
      header_picture,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setGroups(data));
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
    case SET_GROUPS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
