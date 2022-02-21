import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroup } from "../../store/group";
import NewMember from "./NewMember";

const Group = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [addUserShown, setAddUserShown] = useState(false);

  const toggleAddUser = () => setAddUserShown(!addUserShown);

  const group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  return (
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
          {group.members &&
            Object.keys(group.members).map((memberId) => {
              const member = group.members[memberId];
              return (
                <img
                  src={member.profile_picture}
                  className="h-10 w-10 bg-zinc-300 rounded-full object-cover"
                />
              );
            })}
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
      </div>
    </div>
  );
};

export default Group;
