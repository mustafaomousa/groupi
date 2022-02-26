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

  const [selectedSection, setSelectedSection] = useState("");

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  if (!group) return null;

  const handleToggleSection = (e) => {
    e.preventDefault();
    setSelectedSection(e.target.id);
  };

  return (
    <div className="h-full bg-zinc-900">
      <Header group={group} />
      <MemberList group={group} />
      <div>
        <button
          type="button"
          id="messages"
          className="flex w-full items-center justify-between border-t-2 border-zinc-800 bg-zinc-900 p-2 text-xs font-bold uppercase text-zinc-50 transition-all hover:bg-zinc-800 focus:bg-zinc-800 md:p-4 md:text-sm"
          onClick={handleToggleSection}
        >
          <span className="flex items-center uppercase">messages</span>
          <p>+</p>
        </button>
        <div
          className={`${
            selectedSection !== "messages" && "h-0 p-0 md:p-0"
          } h-full overflow-hidden bg-white p-2 shadow-inner transition-all ease-in-out md:p-4`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p>messages go here</p>
        </div>
        <button
          id="events"
          className=" flex w-full items-center justify-between border-t-2 border-zinc-800 bg-zinc-900 p-2 text-xs font-bold uppercase text-zinc-50 transition-all hover:bg-zinc-800 focus:bg-zinc-800 md:p-4 md:text-sm"
          onClick={handleToggleSection}
        >
          <span className="flex items-center uppercase">events</span>
          <p>+</p>
        </button>
        <div
          className={`${
            selectedSection !== "events" && "h-0 p-0 md:p-0"
          } h-full overflow-hidden bg-white p-2 shadow-inner transition-all ease-in-out md:p-4`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p>events go here</p>
        </div>
        <button
          id="media"
          className="flex w-full items-center justify-between border-t-2 border-zinc-800 bg-zinc-900 p-2 text-xs font-bold uppercase text-zinc-50 transition-all hover:bg-zinc-800 focus:bg-zinc-800 md:p-4 md:text-sm"
          onClick={handleToggleSection}
        >
          <span className="flex items-center uppercase">media</span>
          <p>+</p>
        </button>
        <div
          className={`${
            selectedSection !== "media" && "h-0 p-0 md:p-0"
          } h-full overflow-hidden bg-white p-2 shadow-inner transition-all ease-in-out md:p-4`}
          aria-labelledby="accordion-open-heading-1"
        >
          <p>media go here</p>
        </div>
      </div>
    </div>
  );
};

export default Group;
