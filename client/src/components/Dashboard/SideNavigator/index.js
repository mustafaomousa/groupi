import JoinedGroups from "./JoinedGroups";
import OwnedGroups from "./OwnedGroups";
import User from "./User";

const SideNavigator = () => {
  return (
    <div className="border-r-[1px] border-zinc-600 w-full max-w-[350px] h-full overflow-scroll bg-zinc-800 p-5 space-y-10">
      <User />
      <JoinedGroups />
      <OwnedGroups />
    </div>
  );
};

export default SideNavigator;
