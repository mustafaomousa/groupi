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
      <div className="flex justify-between items-center text-white pb-2">
        <p className="text-lg">owned groups</p>
        {newGroupOpen ? (
          <button
            onClick={toggleNewGroup}
            className={`bg-zinc-800 hover:text-red-500 text-white font-semibold text-xs`}
          >
            - cancel
          </button>
        ) : (
          <button
            onClick={toggleNewGroup}
            className={`bg-zinc-800 hover:text-green-500 text-white font-semibold text-xs`}
          >
            + create
          </button>
        )}
      </div>
      <div
        className={`${
          !newGroupOpen && "hidden"
        } bg-zinc-800 border border-zinc-700 mb-5 p-5`}
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
          <p className="border border-zinc-300 rounded p-2 w-full text-center text-sm text-zinc-400">
            no joined groups
          </p>
        )}
      </div>
    </div>
  );
};

export default OwnedGroups;