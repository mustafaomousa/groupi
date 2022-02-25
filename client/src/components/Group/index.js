import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroup } from "../../store/group";
<<<<<<< HEAD
import Header from "./Header";
=======
import MemberList from "./MemberList";
>>>>>>> d5b2472c62a83b4e9184be47b359457ffd579043
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
<<<<<<< HEAD
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
=======
    <div className="max-w-7xl bg-zinc-100 h-full">
      {group && (
        <div className="flex justify-between w-full bg-zinc-200 text-3xl p-5">
          <div className="flex items-center space-x-5">
            <img className="h-16 w-16 bg-zinc-300 rounded-full object-cover" />
            <div>
              <p className="text-lg font-bold">{group.name}</p>
              <p className="text-lg">{group.bio}</p>
            </div>
          </div>
          <div className="flex flex-col text-sm">
            <a>edit</a>
            <a>delete</a>
          </div>
        </div>
      )}
      <div className="">
        <div className="flex p-5 border-b-[1px] flex-wrap gap-2">
          <MemberList group={group} />
          <button
            onClick={toggleAddUser}
            className="h-10 w-10 bg-zinc-300 rounded-full object-cover border-green-700 hover:border-2 flex items-center justify-center"
          >
            +
          </button>
        </div>
        <NewMember
          toggleAddUser={toggleAddUser}
          addUserShown={addUserShown}
          group={group}
        />
        <div className="">
          <p>messages</p>
        </div>
>>>>>>> d5b2472c62a83b4e9184be47b359457ffd579043
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
