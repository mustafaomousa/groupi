import { useSelector } from "react-redux";

import UserAvatar from "../UserAvatar";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="flex flex-col items-center p-2">
      <UserAvatar user={sessionUser} />
      <div className="flex flex-col items-center pt-2">
        <p className="text-sm font-bold">
          {sessionUser.f_name} {sessionUser.l_name}
        </p>
        <p className="text-sm">{sessionUser.username}</p>
      </div>
    </div>
  );
};

export default User;
