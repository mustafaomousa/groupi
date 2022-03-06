import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { logout } from "../../store/session";
import Groups from "./Groups";
import Requests from "./Requests";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user);

  const logoutUser = async () => {
    await dispatch(logout());
  };

  useEffect(() => {
    if (!sessionUser) return navigate("/");
  }, [sessionUser]);

  return (
    <div>
      <div className="fixed top-0 h-[55px] w-full bg-indigo-800">
        <div className="flex h-full items-center justify-between px-5">
          <p className="text-xl font-bold text-white">groupi</p>
          <button onClick={logoutUser} className="text-xs text-white">
            Log out
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="flex h-screen w-[250px] flex-col justify-between space-y-2 border-r-[1px] bg-white pt-[55px]">
          <div className="h-full overflow-scroll">
            <Groups />
            <Requests />
          </div>
        </div>
        <div className="h-screen w-full bg-white pt-[55px] shadow-inner">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
