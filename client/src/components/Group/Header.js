import MemberList from "./MemberList";

const Header = ({ group }) => {
  return (
    <div className="flex w-full flex-col space-y-2 rounded bg-indigo-700 p-3 text-white">
      <div className="flex items-start space-x-2">
        {group.profile_picture ? (
          <img
            src={group.profile_picture}
            className="h-12 w-12 bg-white md:h-14 md:w-14"
          />
        ) : (
          <div className="h-12 w-12 bg-white md:h-14 md:w-14" />
        )}
        <div className="flex h-full flex-col justify-start text-xs sm:text-sm">
          <p className="font-bold">{group.name}</p>
          <p className="antialiased">{group.bio}</p>
        </div>
      </div>
      <MemberList group={group} />
    </div>
  );
};

export default Header;
