import { useSelector } from "react-redux";
import UserAvatar from "../../UserAvatar";

const Messages = ({ messages }) => {
  const sessionUser = useSelector((state) => state.session.user);

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
        className={`max-w-[300px] break-words rounded-t-lg border-[1px]  bg-white px-2 py-1 text-sm ${
          sessionUser.id === message.user.id
            ? "rounded-bl-lg border-indigo-800"
            : "rounded-br-lg border-pink-800/30"
        }`}
      >
        <p>{message.message}</p>
      </div>
      <div
        className={`flex text-[10px] font-bold antialiased ${
          sessionUser.id === message.user.id
            ? "text-indigo-800"
            : "text-pink-800"
        }`}
      >
        <p>{message.user.username}</p>
      </div>
    </div>
  );
};

export default Messages;
