import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../store/session";

import Groups from "./Groups";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sessionUser = useSelector((state) => state.session.user);

  const logoutUser = async () =>
    await dispatch(logout()).then(() => navigate("/"));

  return (
    <div className="flex h-screen space-x-2 overflow-hidden p-2">
      <div className="flex  w-[250px] flex-col justify-between space-y-2">
        <div className="h-full overflow-scroll rounded bg-gray-200">
          <Groups />
          {/* <Requests /> */}
        </div>
        <div className="flex flex-col space-y-2">
          <button
            onClick={logoutUser}
            className="h-[38px] rounded bg-indigo-500 text-white transition-all hover:bg-indigo-600"
          >
            Log out
          </button>
        </div>
      </div>
      <div className="w-full rounded bg-gray-200">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
