import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMemberships } from "../../../store/memberships";

const GroupMemberships = () => {
  const dispatch = useDispatch();
  const groupMemberships = useSelector((state) => state.memberships.joined);

  useEffect(() => {
    dispatch(getMemberships());
  }, [dispatch]);

  if (!groupMemberships) return null;
  return (
    <div className="">
      <div className="text-zinc-100 px-2 py-2 bg-zinc-900">
        <p className="text-xs uppercase">groups</p>
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
  return (
    <div className="flex justify-between items-center px-2 py-2">
      <div className="flex space-x-2 ">
        <img
          src={membership.group.profile_picture}
          className="min-w-[40px] max-w-[40px] h-10 h-10 rounded bg-white shadow"
        />
        <div className="flex flex-col">
          <p className="text-xs text-zinc-50 font-semibold">
            {membership.group.name}
          </p>
          <p className="text-xs text-zinc-400 break-word">
            {membership.group.bio}
          </p>
        </div>
      </div>
      <div className="text-xs">
        <a
          href={`/dashboard/group/${membership.group.id}`}
          className="text-zinc-50 hover:text-green-600"
        >
          enter
        </a>
      </div>
    </div>
  );
};

export default GroupMemberships;
