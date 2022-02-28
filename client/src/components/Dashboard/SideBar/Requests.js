import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  acceptGroupMembershipRequest,
  declineGroupMembershipRequest,
  getMemberships,
} from "../../../store/memberships";
import Button from "../../Button";

const Requests = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.requests);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  if (!groupMemberships || groupMemberships === {}) return null;

  return (
    <div className="text-xs transition-all md:text-sm">
      <div className="flex items-center justify-between border-y-[1px] border-indigo-800 bg-indigo-800 p-2 text-white">
        <p className="font-bold uppercase">requests</p>
      </div>
      <div className="bg-white">
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
    <div className="flex flex-col items-center justify-between border-b-[1px]">
      <div className="flex w-full p-2">
        {membership.group.profile_picture ? (
          <img
            src={membership.group.profile_picture}
            className="mr-2 h-[30px] w-[30px] rounded border-[1px] border-indigo-700 bg-indigo-700 transition-all md:h-[40px] md:w-[40px]"
          />
        ) : (
          <div className="mr-2 h-[30px] w-[30px] rounded border-[1px] border-indigo-700 bg-indigo-700 transition-all md:h-[40px] md:w-[40px]" />
        )}
        <div className="flex flex-col">
          <p className="font-bold">{membership.group.name}</p>
          <p className="antialiased">{membership.requested_message}</p>
        </div>
      </div>
      <div className="flex w-full justify-end space-x-2 px-2">
        <Button onClick={acceptRequest}>join</Button>
        <Button onClick={declineRequest}>decline</Button>
      </div>
    </div>
  );
};

export default Requests;
