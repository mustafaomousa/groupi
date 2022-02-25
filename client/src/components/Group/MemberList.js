import { useState } from "react";
import NewMember from "./NewMember";

const MemberList = ({ group }) => {
  const [addUserShown, setAddUserShown] = useState(false);

  const toggleAddUser = () => setAddUserShown(!addUserShown);

  if (!group.members) return null;

  return (
    <div className="flex p-2 flex-wrap">
      {group.members &&
        Object.keys(group.members).map((memberId) => {
          const member = group.members[memberId];
          return (
            <img
              src={member.profile_picture}
              className="rounded h-10 w-10 bg-zinc-300 object-cover shadow-md mr-2"
            />
          );
        })}
      <button
        onClick={toggleAddUser}
        className="rounded h-10 w-10 bg-zinc-300 object-cover border-gray-500 border-[1px] hover:border-green-500 flex items-center justify-center"
      >
        +
      </button>
      <NewMember
        toggleAddUser={toggleAddUser}
        addUserShown={addUserShown}
        group={group}
      />
    </div>
  );
};

export default MemberList;
