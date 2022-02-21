const MembershipTab = ({ membership }) => {
  return (
    <div className="flex justify-between items-center px-3 py-2 ">
      <div className="flex space-x-2 ">
        <img className="w-[40px] h-[40px] bg-zinc-300 rounded-full" />
        <div className="flex flex-col">
          <p className="text-xs font-semibold">{membership.group.name}</p>
          <p className="text-xs text-zinc-400 break-word">
            {console.log(membership)}
            {membership.group.bio}
          </p>
        </div>
      </div>
      <div className="text-xs">
        <a
          href={`/dashboard/group/${membership.group.id}`}
          className="hover:text-green-600"
        >
          enter
        </a>
      </div>
    </div>
  );
};

export default MembershipTab;
