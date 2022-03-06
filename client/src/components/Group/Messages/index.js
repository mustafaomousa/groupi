import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import socket from "../../../socket";
import { addMessage } from "../../../store/group";

const Messages = () => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.group.messages);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = () => {
    socket.on("message", (message) => {
      dispatch(addMessage(message));
    });
  };

  return (
    <div>
      {messages &&
        Object.keys(messages).map((messageId) => {
          const message = messages[messageId];
          return <Message message={message} sessionUser={sessionUser} />;
        })}
    </div>
  );
};

const Message = ({ message, sessionUser }) => {
  return (
    <div
      className={`flex flex-col ${
        sessionUser.id === message.user.id && "items-end"
      } items-start space-y-1 p-2`}
    >
      <div
        className={`max-w-[300px] break-words rounded-xl border-[1px] px-2 py-1 text-sm text-white shadow-md ${
          sessionUser.id === message.user.id
            ? "rounded-br-none bg-zinc-800/10 text-zinc-800"
            : "rounded-bl-none bg-indigo-700 text-white"
        }`}
      >
        <p>{message.message}</p>
      </div>
      <div
        className={`flex text-[10px] font-bold antialiased ${
          sessionUser.id === message.user.id
            ? "text-zinc-800/50"
            : "text-indigo-700/50"
        }`}
      >
        <p>{message.user.username}</p>
      </div>
    </div>
  );
};

export default Messages;
