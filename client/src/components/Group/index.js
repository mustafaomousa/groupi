import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";

import { getGroup } from "../../store/group";
import Header from "./Header";
import MemberList from "./MemberList";
import Messages from "./Messages";
import NewMessage from "./NewMessage";

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
    <div className="flex h-full flex-col overflow-hidden">
      <Header group={group} />
      <Tab.Group>
        <Tab.List className="mt-2 flex space-x-2 rounded-t  pb-2 text-xs text-white/70">
          <Tab
            className={({ selected }) =>
              `${
                selected && "border-2 font-bold"
              } rounded-full border-pink-700 px-2 uppercase text-pink-700 transition-all`
            }
          >
            Messages
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected && "border-2 font-bold"
              } rounded-full border-pink-700 px-2 uppercase text-pink-700 transition-all`
            }
          >
            Events
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected && "border-2 font-bold"
              } rounded-full border-pink-700 px-2 uppercase text-pink-700 transition-all`
            }
          >
            Media
          </Tab>
        </Tab.List>
        <Tab.Panels className="h-full">
          <Tab.Panel className="flex h-full flex-col space-y-2">
            <div className="h-20 grow overflow-scroll rounded-b ">
              <Messages messages={group.messages} />
            </div>
            <NewMessage group={group} />
          </Tab.Panel>
          <Tab.Panel className="">events go here</Tab.Panel>
          <Tab.Panel className="">media goes here</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Group;
