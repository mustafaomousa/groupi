import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MembershipTab from "./MembershipTab";

import { getMemberships } from "../../../store/memberships";

const JoinedGroups = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  return (
    <div>
      <div className="text-white pb-2">
        <p className="text-lg">joined groups</p>
      </div>
      <div className="divide-y-[1px] bg-zinc-100">
        {groupMemberships ? (
          Object.keys(groupMemberships).map((membershipId) => {
            const membership = groupMemberships[membershipId];
            if (membership.accepted === true)
              return <MembershipTab membership={membership} />;
          })
        ) : (
          <p className="border border-zinc-300 rounded p-2 w-full text-center text-sm text-zinc-400">
            no joined groups
          </p>
        )}
      </div>
    </div>
  );
};

export default JoinedGroups;
