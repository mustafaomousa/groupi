const SET_GROUPS = "session/SET_GROUPS";
const ACCEPT_MEMBERSHIP = "memberships/acceptMembership";
const DECLINE_MEMBERSHIP = "memberships/declineMemberships";

const setGroups = (groups) => ({
  type: SET_GROUPS,
  payload: groups,
});

const acceptMembership = (membership) => ({
  type: ACCEPT_MEMBERSHIP,
  payload: membership,
});

const declineMembership = (membership) => ({
  type: DECLINE_MEMBERSHIP,
  payload: membership,
});

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

export const declineGroupMembershipRequest =
  (membershipId) => async (dispatch) => {
    const response = await fetch(`/api/memberships/${membershipId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accepted: false,
        requested: false,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(declineMembership(data));
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

export const acceptGroupMembershipRequest =
  (membershipId) => async (dispatch) => {
    const response = await fetch(`/api/memberships/${membershipId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accepted: true,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(acceptMembership(data));
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

const initialState = { joined: null, requests: null };

export default function reducer(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case SET_GROUPS:
      Object.keys(action.payload).map((membershipId) => {
        const membership = action.payload[membershipId];
        if (membership.accepted === true) {
          return (newState.joined = {
            ...newState.joined,
            [membership.id]: membership,
          });
        } else if (
          membership.accepted === false &&
          membership.requested === true
        ) {
          return (newState.requests = {
            ...newState.requests,
            [membership.id]: membership,
          });
        }
      });
      return newState;
    case ACCEPT_MEMBERSHIP:
      const {
        [action.payload.id]: acceptedMembership,
        ...restOfNonAcceptedMembershipRequests
      } = newState.requests;
      return {
        ...newState,
        joined: { ...newState.joined, [action.payload.id]: action.payload },
        requests: restOfNonAcceptedMembershipRequests,
      };
    case DECLINE_MEMBERSHIP:
      const {
        [action.payload.id]: removedMembership,
        ...restOfNonDeclinedMembershipRequests
      } = newState.requests;
      return {
        ...newState,
        requests: restOfNonDeclinedMembershipRequests,
      };
    default:
      return state;
  }
}
