import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Requests from "./SideBar/Requests";
import SideBar from "./SideBar";
import Groups from "./SideBar/Groups";
import User from "./User";
import Button from "../Button";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <p>no user</p>;

  return (
    <div className="flex h-screen space-x-2 overflow-hidden p-2 transition-all">
      <div className="flex min-w-[220px] max-w-[220px] flex-col justify-between rounded-xl border-2 border-indigo-800 transition-all md:w-[300px]">
        <div className="space-y-2">
          <User />
          <Groups />
          <Requests />
        </div>
        <div className="flex justify-end p-2">
          <Button>logout</Button>
        </div>
      </div>
      <div className="w-full max-w-[700px] overflow-scroll rounded-xl border-2 border-indigo-700 transition-all lg:col-span-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
