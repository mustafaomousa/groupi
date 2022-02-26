import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGroup } from "../../store/group";
import Header from "./Header";
import MemberList from "./MemberList";
import NewMember from "./NewMember";

const Group = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  if (!group) return null;

  return (
    <div>
      <Header group={group} />
      <MemberList group={group} />
      <SectionTitle>messages</SectionTitle>
      <div className="p-2">messages go here</div>
      <SectionTitle>events</SectionTitle>
      <div className="p-2">events go here </div>
      <SectionTitle>media</SectionTitle>
      <div className="p-2">media goes here </div>
    </div>
  );
};

const SectionTitle = (props) => {
  return (
    <div className="bg-zinc-800 p-2 shadow-md">
      <p
        {...props}
        className="text-xs font-bold uppercase text-zinc-100 transition-all md:text-sm"
      ></p>
    </div>
  );
};

export default Group;
