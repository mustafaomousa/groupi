import GroupMembershipRequests from "./GroupMembershipRequests";
import GroupMemberships from "./GroupMemberships";
import User from "./User";

const SideNavigator = () => {
  return (
    <div className="h-full w-full max-w-[200px] overflow-scroll border-r-2 border-zinc-800 bg-zinc-800 transition-all sm:max-w-[250px]">
      <User />
      <GroupMemberships />
      <GroupMembershipRequests />
    </div>
  );
};

export default SideNavigator;
