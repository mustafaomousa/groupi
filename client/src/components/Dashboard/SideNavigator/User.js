import { useSelector } from "react-redux";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="text-white p-2 space-y-2">
      <div className="flex items-center">
        <img
          src={sessionUser.profile_picture}
          className="h-10 w-10 bg-white object-cover mr-2 rounded shadow"
        />
        <div className="flex flex-col justify-end">
          <p className="text-sm font-bold uppercase">
            {sessionUser.f_name} {sessionUser.l_name}
          </p>
          <p className="text-sm">{sessionUser.username}</p>
        </div>
      </div>
      <div>
        <p className="text-xs antialiased">{sessionUser.bio}</p>
      </div>
    </div>
  );
};

export default User;
