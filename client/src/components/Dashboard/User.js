import { useSelector } from "react-redux";

import UserAvatar from "../UserAvatar";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="row flex items-center space-x-3 rounded bg-pink-300 px-2 py-1">
      <UserAvatar user={sessionUser} />
      <div className="flex flex-col items-start">
        <p className="text-sm font-bold">
          {sessionUser.f_name} {sessionUser.l_name}
        </p>
        {/* <p className="text-sm">{sessionUser.username}</p> */}
      </div>
    </div>
  );
};

export default User;
