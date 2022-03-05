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
    <div className="flex flex-col">
      <Header group={group} />
      <Tab.Group>
        <Tab.List className="grid grid-cols-3 bg-indigo-700 text-xs text-white/70">
          <Tab
            className={({ selected }) =>
              `${
                selected && "rounded-tr bg-indigo-600 font-bold text-white"
              } py-1 uppercase transition-all`
            }
          >
            Messages
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected && "rounded-t bg-indigo-600 font-bold text-white"
              } py-1 uppercase transition-all`
            }
          >
            Events
          </Tab>
          <Tab
            className={({ selected }) =>
              `${
                selected && "rounded-tl bg-indigo-600 font-bold text-white"
              }  py-1 uppercase transition-all`
            }
          >
            Media
          </Tab>
        </Tab.List>
        <Tab.Panels className="">
          <Tab.Panel className="p-2">
            <Messages messages={group.messages} />
            <NewMessage group={group} />
          </Tab.Panel>
          <Tab.Panel className="p-2">events go here</Tab.Panel>
          <Tab.Panel className="p-2">media goes here</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Group;
