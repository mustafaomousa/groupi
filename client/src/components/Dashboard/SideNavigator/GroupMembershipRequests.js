import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  acceptGroupMembershipRequest,
  declineGroupMembershipRequest,
  getMemberships,
} from "../../../store/memberships";

const GroupMembershipRequests = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.requests);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  if (!groupMemberships) return null;

  return (
    <div>
      <div className="text-zinc-100 px-2 py-2 bg-zinc-900">
        <p className="text-xs uppercase">requests</p>
      </div>
      <div className="divide-y-[1px] divide-zinc-600 bg-zinc-700">
        {Object.keys(groupMemberships).map((membershipId) => {
          const membership = groupMemberships[membershipId];
          return <MembershipTab membership={membership} />;
        })}
      </div>
    </div>
  );
};

const MembershipTab = ({ membership }) => {
  const dispatch = useDispatch();

  const acceptRequest = async () => {
    await dispatch(acceptGroupMembershipRequest(membership.id));
  };

  const declineRequest = async () => {
    await dispatch(declineGroupMembershipRequest(membership.id));
  };

  return (
    <div className="flex flex-col justify-between items-center">
      <div className="flex w-full p-2">
        <img
          src={membership.group.profile_picture}
          className="min-w-[40px] max-w-[40px] h-10 h-10 rounded bg-white shadow mr-2"
        />
        <div className="flex flex-col">
          <p className="text-xs text-zinc-50 font-semibold">
            {membership.group.name}
          </p>
          <p className="text-xs text-zinc-400 break-word italic">
            {membership.requested_message}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full text-white antialiased text-sm bg-zinc-600 uppercase">
        <button onClick={acceptRequest} className="hover:bg-green-700">
          join
        </button>
        <button onClick={declineRequest} className="hover:bg-red-700">
          decline
        </button>
      </div>
    </div>
  );
};

export default GroupMembershipRequests;
