const SET_GROUP = "session/SET_GROUP";

const setGroup = (group) => ({
  type: SET_GROUP,
  payload: group,
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
}
