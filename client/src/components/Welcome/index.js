import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (sessionUser) return navigate("/dashboard");
  }, [sessionUser]);

  return (
    <div className="flex h-screen flex-col items-center justify-center ">
      <div className="w-full max-w-[350px] border border-zinc-300 bg-white pb-5">
        <p className="pt-10 text-center text-4xl font-bold">groupi.</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;
