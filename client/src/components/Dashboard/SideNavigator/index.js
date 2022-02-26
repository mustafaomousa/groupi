import GroupMembershipRequests from "./GroupMembershipRequests";
import GroupMemberships from "./GroupMemberships";
import User from "./User";

const SideNavigator = () => {
  return (
    <div className="h-full w-full max-w-[200px] overflow-scroll bg-zinc-700 transition-all sm:max-w-[250px]">
      <User />
      <GroupMemberships />
      <GroupMembershipRequests />
    </div>
  );
};

export default SideNavigator;
