const Header = ({ group }) => {
  return (
    <div className="flex justify-between w-full text-3xl p-2 bg-zinc-800">
      <div className="flex items-center space-x-2 text-gray-50">
        <img
          src={group.profile_picture}
          className="rounded min-h-[80px] max-h-[80px] min-w-[80px] max-w-[80px] bg-zinc-400 object-cover border-[1px] border-gray-500 hover:border-gray-400"
        />
        <div className="flex flex-col justify-end h-full text-sm">
          <p className="font-bold">{group.name}</p>
          <p className="">{group.bio}</p>
        </div>
      </div>
      <div className="flex flex-col text-sm">
        <a>edit</a>
        <a>delete</a>
      </div>
    </div>
  );
};

export default Header;
