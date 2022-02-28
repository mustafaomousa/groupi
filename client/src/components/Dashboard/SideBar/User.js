import { useSelector } from "react-redux";
import UserAvatar from "../../UserAvatar";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="space-y-2 bg-indigo-900 p-2 text-white">
      <div className="flex items-center">
        <UserAvatar user={sessionUser} />
        <div className="flex flex-col justify-end text-xs md:text-sm">
          <p className="font-bold uppercase">
            {sessionUser.f_name} {sessionUser.l_name}
          </p>
          <p>{sessionUser.username}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
