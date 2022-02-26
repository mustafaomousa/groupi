const Header = ({ group }) => {
  return (
    <div className="flex w-full p-2 text-3xl">
      <div className="flex items-center space-x-2 text-zinc-900">
        <img
          src={group.profile_picture}
          className="h-16 w-16 rounded bg-white shadow"
        />
        <div className="flex h-full flex-col justify-end text-sm">
          <p className="font-bold">{group.name}</p>
          <p className="">{group.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
