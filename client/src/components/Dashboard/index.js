import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/session";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const signOutUser = async () => {
    await dispatch(logout()).then(() => navigate("/"));
  };

  return (
    <div className="w-full grid auto-rows-min">
      <div className="fixed px-5 border-b-[1px] border-zinc-300 flex items-center justify-between h-[55px] w-full">
        <p className="text-center text-3xl font-bold select-none">groupi.</p>
        <button
          className="bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-semibold py-1 px-2 rounded"
          onClick={signOutUser}
        >
          Sign out
        </button>
      </div>
      <div className="flex pt-[55px] h-screen">
        <div className="border-r-[1px] border-zinc-300 w-full max-w-[350px] h-full overflow-scroll">
          <div className="px-5 py-2 h-full">
            <div className="flex items-center gap-2 py-5">
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
                  <button className="border rounded p-2 w-full bg-zinc-700 hover:bg-zinc-600 text-white font-semibold">
                    + new group
                  </button>
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
                <button className="border rounded p-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white font-semibold">
                  + new group
                </button>
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
        <div className="p-5">
          <p>afsd</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
