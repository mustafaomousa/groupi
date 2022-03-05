const UserAvatar = ({ user }) => {
  return user.profile_picture ? (
    <img
      src={user.profile_picture}
      className="h-[30px] w-[30px] rounded-full bg-pink-700 object-cover shadow-md transition-all md:h-[40px] md:w-[40px]"
    />
  ) : (
    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-pink-700 object-cover shadow-md transition-all md:h-[40px] md:w-[40px]">
      <p className="text-xs font-bold text-white md:text-sm">
        {user.f_name[0]}
        {user.l_name[0]}
      </p>
    </div>
  );
};

export default UserAvatar;
