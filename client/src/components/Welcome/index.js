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
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="absolute top-0 left-0 p-5 text-4xl font-bold">groupi.</p>
      <div className="border-black/15 rounded-xl border-[1px] bg-white p-8 shadow-xl">
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;
