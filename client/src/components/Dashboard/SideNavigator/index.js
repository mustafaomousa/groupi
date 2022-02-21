import { useState } from "react";
import { useSelector } from "react-redux";
import GroupForm from "../../../forms/GroupForm";

const SideNavigator = () => {
  const sessionUser = useSelector((state) => state.session.user);

  const [newGroupOpen, setNewGroupOpen] = useState(false);

  const toggleNewGroup = () => setNewGroupOpen(!newGroupOpen);

  return (
    <div className="border-r-[1px] border-zinc-300 w-full max-w-[350px] h-full overflow-scroll">
      <div className="px-5 py-5 h-full ">
        <div className="flex items-center pb-5 gap-2">
          <div className="h-10 w-10 bg-zinc-500 rounded-full"></div>
          <div className="">
            <p className="text-lg font-semibold">
              {sessionUser.f_name} {sessionUser.l_name}
            </p>
            <p className="text-xs">{sessionUser.username}</p>
          </div>
        </div>
        <div className="py-5">
          <p className="text-sm pb-2 font-bold">joined groups</p>
          <div className="space-y-2">
            {sessionUser && Object.keys(sessionUser.owned_groups).length ? (
              <div>
                <button className="border rounded p-2 w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold">
                  + new group
                </button>
              </div>
            ) : (
              <p className="border border-zinc-300 rounded p-2 w-full text-center text-sm text-zinc-400">
                no joined groups
              </p>
            )}
          </div>
        </div>
        <div className="py-5">
          <p className="text-sm font-bold pb-2">owned groups</p>
          <div className="rounded space-y-2">
            <div className="space-y-2">
              <button
                onClick={toggleNewGroup}
                className={`border rounded p-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold ${
                  newGroupOpen && "hidden"
                }`}
              >
                + new group
              </button>
              <div
                className={`p-2 border-[1px] bg-white rounded transition-all ${
                  !newGroupOpen && "hidden"
                }`}
              >
                <GroupForm />
              </div>
            </div>
            {sessionUser && Object.keys(sessionUser.owned_groups).length ? (
              <div>
                <button className="border rounded p-2 w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold">
                  + new group
                </button>
              </div>
            ) : (
              <p className="border border-zinc-300 rounded p-2 w-full text-center text-sm text-zinc-400">
                no owned groups
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavigator;
