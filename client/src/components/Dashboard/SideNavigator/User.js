import { useSelector } from "react-redux";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="text-white px-2 my-5">
      <div className="flex items-center gap-2">
        <img className="h-10 w-10 bg-zinc-500 object-cover" />
        <div className="flex flex-col justify-end">
          <p className="text-sm font-bold uppercase">
            {sessionUser.f_name} {sessionUser.l_name}
          </p>
          <p className="text-sm">{sessionUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
