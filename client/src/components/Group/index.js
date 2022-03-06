import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import socket from "../../socket";

import { getGroup } from "../../store/group";
import Header from "./Header";
import Messages from "./Messages";
import NewMessage from "./NewMessage";

const Group = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const group = useSelector((state) => state.group);

  useEffect(() => {
    dispatch(getGroup(params.groupId));
  }, [dispatch]);

  useEffect(() => {
    group && socket.emit("join", { room: group.id });
  }, [group]);

  if (!group) return null;

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="w-full p-3">
        <Header group={group} />
      </div>
      <div className="grow overflow-scroll p-3">
        <Messages />
      </div>
      <div className="p-3">
        <NewMessage group={group} />
      </div>
    </div>
  );
};

export default Group;
