const Header = ({ group }) => {
  return (
    <div className="flex w-full text-3xl p-2">
      <div className="flex items-center space-x-2 text-zinc-900">
        <img
          src={group.profile_picture}
          className="rounded h-16 w-16 bg-white shadow"
        />
        <div className="flex flex-col justify-end h-full text-sm">
          <p className="font-bold">{group.name}</p>
          <p className="">{group.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
