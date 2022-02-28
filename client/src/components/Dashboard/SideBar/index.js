import Requests from "./Requests";
import Groups from "./Groups";
import User from "./User";

const SideBar = () => {
  return (
    <div className="w-full max-w-[200px] overflow-scroll border-r-[1px] border-indigo-800 transition-all sm:max-w-[250px] md:max-w-[320px]">
      <User />
      <Groups />
      <Requests />
    </div>
  );
};

export default SideBar;
