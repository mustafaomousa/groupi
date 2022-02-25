import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroup } from "../../store/group";
import Header from "./Header";
import NewMember from "./NewMember";

const Group = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group);

  const [addUserShown, setAddUserShown] = useState(false);

  const toggleAddUser = () => setAddUserShown(!addUserShown);

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  if (!group) return null;

  return (
    <div className="divide-y-[1px] divide-zinc-900">
      <Header group={group} />
      <SectionTitle>members</SectionTitle>
      <div className="flex p-2 flex-wrap gap-2">
        {group.members &&
          Object.keys(group.members).map((memberId) => {
            const member = group.members[memberId];
            return (
              <img
                src={member.profile_picture}
                className="rounded h-10 w-10 bg-zinc-300 object-cover border-[1px] border-gray-500 hover:border-gray-400"
              />
            );
          })}
        <button
          onClick={toggleAddUser}
          className="rounded h-10 w-10 bg-zinc-300 object-cover border-gray-500 border-[1px] hover:border-green-500 flex items-center justify-center"
        >
          +
        </button>
      </div>
      <NewMember
        toggleAddUser={toggleAddUser}
        addUserShown={addUserShown}
        group={group}
      />
      <SectionTitle>messages</SectionTitle>
      <div className="p-2">messages go here</div>
      <SectionTitle>events</SectionTitle>
      <div className="p-2">events go here </div>
      <SectionTitle>media</SectionTitle>
      <div className="p-2">media goes here </div>
    </div>
  );
};

const SectionTitle = (props) => {
  return (
    <div className="p-2 bg-zinc-800 shadow-md">
      <p {...props} className="uppercase text-xs text-zinc-100"></p>
    </div>
  );
};

export default Group;
