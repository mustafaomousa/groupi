import GroupMembershipRequests from "./GroupMembershipRequests";
import GroupMemberships from "./GroupMemberships";
import User from "./User";

const SideNavigator = () => {
  return (
    <div className="border-r-[1px] border-zinc-900 w-full max-w-[250px] h-full overflow-scroll bg-zinc-700">
      <User />
      <GroupMemberships />
      <GroupMembershipRequests />
    </div>
  );
};

export default SideNavigator;
