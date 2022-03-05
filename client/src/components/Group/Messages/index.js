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
        className={`max-w-[300px] break-words rounded-t-lg border-[1px] bg-white px-2 py-0.5 text-xs shadow-sm md:text-sm ${
          sessionUser.id === message.user.id ? "rounded-bl-lg" : "rounded-br-lg"
        }`}
      >
        <p>{message.message}</p>
      </div>
      <div className="flex text-[10px] font-bold text-white antialiased">
        <p>{message.user.username}</p>
      </div>
    </div>
  );
};

export default Messages;
