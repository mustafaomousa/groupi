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
    <div className="fixed flex h-[55px] w-full items-center justify-between border-b-[1px] border-zinc-900 bg-zinc-900 px-5">
      <p className="select-none text-center text-xl font-bold text-white antialiased transition-all md:text-2xl">
        groupi.
      </p>
      <button
        className="rounded-sm text-xs text-white transition-all hover:text-red-700 md:text-sm"
        onClick={signOutUser}
      >
        log out
      </button>
    </div>
  );
};

export default Header;
