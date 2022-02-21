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
    <div className="fixed px-5 border-b-[1px] border-zinc-300 flex items-center justify-between h-[55px] w-full">
      <p className="text-center text-3xl font-bold select-none">groupi.</p>
      <button
        className="bg-zinc-800 hover:bg-zinc-700 text-white py-0.5 px-2 rounded-sm hover:shadow-lg"
        onClick={signOutUser}
      >
        sign out
      </button>
    </div>
  );
};

export default Header;
