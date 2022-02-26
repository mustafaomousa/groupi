import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import SideNavigator from "./SideNavigator";

const Dashboard = () => {
  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) return <p>no user</p>;

  return (
    <div className="grid w-full auto-rows-min">
      <Header />
      <div className="flex h-screen pt-[55px]">
        <SideNavigator />
        <div className="w-full overflow-scroll bg-zinc-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
