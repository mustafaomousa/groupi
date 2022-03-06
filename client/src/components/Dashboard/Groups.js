import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMemberships } from "../../store/memberships";

const Groups = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.joined);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  return (
    <div>
      {groupMemberships &&
        Object.keys(groupMemberships).map((membershipId) => {
          const membership = groupMemberships[membershipId];
          return (
            <div>
              <Membership membership={membership} />
            </div>
          );
        })}
    </div>
  );
};

const Membership = ({ membership }) => {
  return (
    <a
      href={`/dashboard/group/${membership.group.id}`}
      className="flex h-[40px] items-center justify-start space-x-2 px-3 text-sm hover:bg-indigo-700 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>

      <p>{membership.group.name}</p>
    </a>
  );
};

export default Groups;
