import { useSelector } from "react-redux";

const User = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="space-y-2 p-2 text-white">
      <div className="flex items-center">
        {sessionUser.profile_picture ? (
          <img
            src={sessionUser.profile_picture}
            className="mr-2 h-[40px] w-[40px] rounded rounded-full bg-white object-fill shadow transition-all md:h-[50px] md:w-[50px]"
          />
        ) : (
          <div className="mr-2 h-[40px] w-[40px] rounded rounded-full bg-white object-fill shadow transition-all md:h-[50px] md:w-[50px]" />
        )}
        <div className="flex flex-col justify-end">
          <p className="text-xs font-bold uppercase transition-all md:text-sm">
            {sessionUser.f_name} {sessionUser.l_name}
          </p>
          <p className="text-sm">{sessionUser.username}</p>
        </div>
      </div>
      {/* <div className=" ">
        <p className="transition-all ease-in-out text-xs antialiased h-10 hover:h-full">
          {sessionUser.bio}
        </p>
      </div> */}
    </div>
  );
};

export default User;
