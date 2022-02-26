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
    <div className="text-xs transition-all md:text-sm">
      <div className="bg-zinc-900 px-2 py-2 text-zinc-100">
        <p className="uppercase">requests</p>
      </div>
      <div className="bg-zinc-700">
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
    <div className="flex flex-col items-center justify-between">
      <div className="flex w-full p-2">
        <img
          src={membership.group.profile_picture}
          className="mr-2 h-10 h-10 min-w-[40px] max-w-[40px] rounded bg-white shadow"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-zinc-50">{membership.group.name}</p>
          <p className="break-word italic text-zinc-400">
            {membership.requested_message}
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 bg-zinc-600 text-sm uppercase text-white antialiased">
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
