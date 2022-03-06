import MemberList from "./MemberList";

const Header = ({ group }) => {
  return (
    <div className="text-zinc-800">
      <p className="pb-1 text-lg">{group.name}</p>
      <MemberList group={group} />
    </div>
  );
};

export default Header;
