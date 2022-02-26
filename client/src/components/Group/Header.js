const Header = ({ group }) => {
  return (
    <div className="flex w-full bg-zinc-900 p-2 text-3xl transition-all md:p-4">
      <div className="flex items-center space-x-2 text-zinc-50">
        {group.profile_picture ? (
          <img
            src={group.profile_picture}
            className="h-12 w-12 bg-white md:h-14 md:w-14"
          />
        ) : (
          <div className="h-12 w-12  bg-white md:h-14 md:w-14" />
        )}
        <div className="flex h-full flex-col justify-end text-xs md:text-sm">
          <p className="font-bold">{group.name}</p>
          <p className="antialiased">{group.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
