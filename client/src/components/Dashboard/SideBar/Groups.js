import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMemberships } from "../../../store/memberships";
import GroupForm from "../../../forms/GroupForm";
import Button from "../../Button";

const Groups = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.joined);

  const [newGroupOpen, setNewGroupOpen] = useState(false);

  const openNewGroup = () => setNewGroupOpen(true);
  const closeNewGroup = () => setNewGroupOpen(false);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  return (
    <div className="transition-all">
      <div className="flex items-center justify-between bg-indigo-900 p-2 text-white">
        <p className="text-xs font-bold uppercase md:text-sm">groups</p>
        {newGroupOpen ? (
          <Button onClick={closeNewGroup}>cancel</Button>
        ) : (
          <Button onClick={openNewGroup}>create</Button>
        )}
      </div>
      <div
        className={`${
          !newGroupOpen && "h-0 overflow-hidden"
        } bg-indigo-900 transition-all`}
      >
        <GroupForm />
      </div>
      <div className="bg-white">
        {groupMemberships &&
          Object.keys(groupMemberships).map((membershipId) => {
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
      className="flex w-full items-start border-b-[1px] border-indigo-50 p-2 text-xs hover:bg-indigo-50 md:text-sm"
    >
      {membership.group.profile_picture ? (
        <img
          src={membership.group.profile_picture}
          className="mr-2 h-[30px] w-[30px] rounded border-[1px] border-indigo-700 bg-indigo-700 transition-all md:h-[40px] md:w-[40px]"
        />
      ) : (
        <div className="mr-2 h-[30px] w-[30px] rounded border-[1px] border-indigo-700 bg-indigo-700 transition-all md:h-[40px] md:w-[40px]" />
      )}
      <p className="font-bold">{membership.group.name}</p>
    </a>
  );
};

export default Groups;
