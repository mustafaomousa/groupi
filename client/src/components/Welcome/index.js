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
      <div className="w-full max-w-[300px] rounded-2xl bg-white p-10 shadow-2xl ring-2 ring-black/5 ">
        <p className="pb-5 text-center text-4xl font-bold">groupi.</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;
