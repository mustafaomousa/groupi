const MembershipTab = ({ membership }) => {
  return (
    <div className="flex justify-between items-center px-2 py-2">
      <div className="flex space-x-2 ">
        <img className="min-w-[40px] max-w-[40px] h-10 h-10 bg-zinc-500" />
        <div className="flex flex-col">
          <p className="text-xs text-zinc-50 font-semibold">
            {membership.group.name}
          </p>
          <p className="text-xs text-zinc-400 break-word">
            {membership.group.bio}
          </p>
        </div>
      </div>
      <div className="text-xs">
        <a
          href={`/dashboard/group/${membership.group.id}`}
          className="text-zinc-50 hover:text-green-600"
        >
          enter
        </a>
      </div>
    </div>
  );
};

export default MembershipTab;
