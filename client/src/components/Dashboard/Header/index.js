import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../../store/session";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = async () => {
    await dispatch(logout()).then(() => navigate("/"));
  };

  return (
    <div className="fixed px-5 bg-zinc-800 border-b-[1px] border-zinc-600  flex items-center justify-between h-[55px] w-full">
      <p className="text-center text-3xl text-white antialiased font-bold select-none">
        groupi.
      </p>
      <button
        className="bg-zinc-700 hover:bg-zinc-600 text-white py-0.5 px-2 rounded-sm hover:shadow-lg"
        onClick={signOutUser}
      >
        sign out
      </button>
    </div>
  );
};

export default Header;
