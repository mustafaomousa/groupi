import { useState } from "react";
import UserAvatar from "../../../UserAvatar";
import NewMember from "./NewMember";

const MemberList = ({ group }) => {
  const [addUserShown, setAddUserShown] = useState(false);

  const toggleAddUser = () => setAddUserShown(!addUserShown);

  if (!group.members) return null;

  return (
    <div className="flex flex-wrap gap-1 transition-all">
      {group.members &&
        Object.keys(group.members).map((memberId) => {
          const member = group.members[memberId];
          return <UserAvatar user={member} />;
        })}
      <button
        onClick={toggleAddUser}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 object-cover transition-all hover:border-green-500 md:h-[40px] md:w-[40px]"
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
