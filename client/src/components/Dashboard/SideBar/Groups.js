import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Disclosure } from "@headlessui/react";

import { getMemberships } from "../../../store/memberships";
import GroupForm from "../../../forms/GroupForm";
import Button from "../../Button";

const Groups = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.joined);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  return (
    <div className="space-y-2">
      <div className="flex w-full items-center justify-between px-2 text-xs font-bold uppercase">
        <p>groups</p>
      </div>
      <div className="flex max-h-48 flex-col  space-y-2 overflow-scroll px-2">
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
    </div>
  );
};

const Membership = ({ membership }) => {
  return (
    <a
      href={`/dashboard/group/${membership.group.id}`}
      className="flex h-[40px] rounded border-[1px] border-indigo-700 bg-indigo-700 text-xs transition-all hover:scale-[102%] md:text-sm"
    >
      <div className="">
        {membership.group.profile_picture ? (
          <img
            src={membership.group.profile_picture}
            className="object-fit h-full min-w-[40px] max-w-[40px] rounded-l"
          />
        ) : (
          <div className="h-full w-10 rounded-l bg-indigo-700" />
        )}
      </div>
      <div className="w-full bg-white pl-2">
        <p>{membership.group.name}</p>
      </div>
    </a>
  );
};

export default Groups;
