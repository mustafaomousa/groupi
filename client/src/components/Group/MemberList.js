const MemberList = ({ group }) => {
  if (!group.members) return null;

  return Object.keys(group.members).map((memberId) => {
    const member = group.members[memberId];
    console.log(member);
    return (
      <img
        src={member.profile_picture}
        className={`h-10 w-10 bg-zinc-300 rounded-full object-cover ${
          member.accepted === false && "border-2 border-red-500"
        } ${member.id === group.admin_id && "border-2 border-yellow-500"}`}
      />
    );
  });
};

export default MemberList;
