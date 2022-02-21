import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getGroup } from "../store/group";

const Group = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  return (
    <div className="max-w-7xl bg-zinc-100 h-full">
      {group && (
        <div className="w-full bg-zinc-200 text-3xl p-5">
          <div className="flex items-center space-x-5">
            <img className="h-16 w-16 bg-zinc-300 rounded-full object-cover" />
            <div>
              <p className="text-lg font-bold">{group.name}</p>
              <p className="text-lg">{group.bio}</p>
            </div>
          </div>
        </div>
      )}
      <div className="">
        <div className="flex space-x-2 p-5 border-b-[1px]">
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
          <button className="h-10 w-10 bg-zinc-300 rounded-full flex items-center justify-center text-sm hover:border border-green-600">
            +
          </button>
        </div>
        <div className="">
          <p>messages</p>
        </div>
      </div>
    </div>
  );
};

export default Group;
