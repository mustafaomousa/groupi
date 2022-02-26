import { useState } from "react";
import NewMember from "./NewMember";

const MemberList = ({ group }) => {
  const [addUserShown, setAddUserShown] = useState(false);

  const toggleAddUser = () => setAddUserShown(!addUserShown);

  if (!group.members) return null;

  return (
    <div className="flex flex-wrap bg-zinc-900 p-2 transition-all md:p-4">
      {group.members &&
        Object.keys(group.members).map((memberId) => {
          const member = group.members[memberId];
          return (
            <img
              src={member.profile_picture}
              className="mr-2 h-[30px] w-[30px] rounded-full bg-zinc-300 object-cover shadow-md transition-all md:h-[40px] md:w-[40px]"
            />
          );
        })}
      <button
        onClick={toggleAddUser}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full  border-[1px] object-cover transition-all hover:border-green-500 md:h-[40px] md:w-[40px]"
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
