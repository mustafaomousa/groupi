import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMemberships } from "../../../store/memberships";
import GroupForm from "../../../forms/GroupForm";

const GroupMemberships = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.joined);

  const [newGroupOpen, setNewGroupOpen] = useState(false);

  const openNewGroup = () => setNewGroupOpen(true);
  const closeNewGroup = () => setNewGroupOpen(false);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  if (!groupMemberships) return null;

  return (
    <div className="text-xs transition-all md:text-sm">
      <div className="flex items-center justify-between bg-zinc-900 px-2 py-2 text-zinc-100">
        <p className="uppercase">groups</p>
        {newGroupOpen ? (
          <button
            onClick={closeNewGroup}
            className="text rounded hover:text-red-600"
          >
            -
          </button>
        ) : (
          <button
            onClick={openNewGroup}
            className="text rounded hover:text-green-600"
          >
            +
          </button>
        )}
      </div>
      <div
        className={`${
          !newGroupOpen && "h-0 overflow-hidden p-0"
        } bg-zinc-900 p-2 transition-all`}
      >
        <GroupForm />
      </div>
      <div>
        {Object.keys(groupMemberships).map((membershipId) => {
          const membership = groupMemberships[membershipId];

          return <MembershipTab membership={membership} />;
        })}
      </div>
    </div>
  );
};

const MembershipTab = ({ membership }) => {
  return (
    <a
      href={`/dashboard/group/${membership.group.id}`}
      className="flex w-full items-center p-2 hover:bg-zinc-600"
    >
      <img
        src={membership.group.profile_picture}
        className="mr-2 h-[30px] w-[30px] rounded bg-white shadow transition-all md:h-[40px] md:w-[40px]"
      />
      <p className="font-semibold text-zinc-50">{membership.group.name}</p>
      {/* <p className="text-zinc-400 break-word">{membership.group.bio}</p> */}
    </a>
  );
};

export default GroupMemberships;
