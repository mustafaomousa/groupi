import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideNavigator from "./SideNavigator";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <p>no user</p>;

  return (
    <div className="w-full grid auto-rows-min">
      <Header />
      <div className="flex pt-[55px] h-screen">
        <SideNavigator />
        <div className="p-5 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
