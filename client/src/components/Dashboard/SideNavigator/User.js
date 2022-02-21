import { useSelector } from "react-redux";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="bg-zinc-100">
      <div className="flex items-center gap-2  p-3">
        <img
          src={sessionUser.profile_picture}
          className="h-10 w-10 bg-zinc-500 rounded-full object-cover"
        />
        <div className="">
          <p className="text-lg font-semibold">
            {sessionUser.f_name} {sessionUser.l_name}
          </p>
          <p className="text-xs">{sessionUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
