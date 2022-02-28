import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "../../store/session";
import Button from "../Button";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOutUser = async () => {
    await dispatch(logout()).then(() => navigate("/"));
  };

  return (
    <div className="fixed flex h-[55px] w-full items-center justify-between  border-b-[1px] border-indigo-800 bg-indigo-900 px-5">
      <p className="select-none text-center text-xl font-extrabold text-white antialiased transition-all md:text-2xl">
        groupi.
      </p>
      <Button onClick={signOutUser}>sign out</Button>
    </div>
  );
};

export default Header;
