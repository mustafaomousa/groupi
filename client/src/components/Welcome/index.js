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
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="w-full max-w-[350px] bg-white border border-zinc-300 pb-5">
        <p className="text-center pt-10 text-4xl font-bold">groupi.</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;
