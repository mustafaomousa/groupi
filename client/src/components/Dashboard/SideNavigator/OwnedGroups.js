import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupForm from "../../../forms/GroupForm";
import { getMemberships } from "../../../store/memberships";
import MembershipTab from "./MembershipTab";

const OwnedGroups = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [newGroupOpen, setNewGroupOpen] = useState(false);

  const toggleNewGroup = () => setNewGroupOpen(!newGroupOpen);

  const groupMemberships = useSelector((state) => state.memberships);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center justify-between pb-2 text-white">
        <p className="text-lg">owned groups</p>
        {newGroupOpen ? (
          <button
            onClick={toggleNewGroup}
            className={`bg-zinc-800 text-xs font-semibold text-white hover:text-red-500`}
          >
            - cancel
          </button>
        ) : (
          <button
            onClick={toggleNewGroup}
            className={`bg-zinc-800 text-xs font-semibold text-white hover:text-green-500`}
          >
            + create
          </button>
        )}
      </div>
      <div
        className={`${
          !newGroupOpen && "hidden"
        } mb-5 border border-zinc-700 bg-zinc-800 p-5`}
      >
        <GroupForm />
      </div>
      <div className="divide-y-[1px] bg-zinc-100 ">
        {groupMemberships ? (
          Object.keys(groupMemberships).map((membershipId) => {
            const membership = groupMemberships[membershipId];
            if (membership.group.admin_id === sessionUser.id)
              return <MembershipTab membership={membership} />;
          })
        ) : (
          <p className="w-full rounded border border-zinc-300 p-2 text-center text-sm text-zinc-400">
            no joined groups
          </p>
        )}
      </div>
    </div>
  );
};

export default OwnedGroups;
