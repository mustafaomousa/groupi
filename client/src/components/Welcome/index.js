import Login from "../Login";
import { Outlet, Route, Routes } from "react-router-dom";
const Welcome = () => {
  return (
    <div className="bg-zinc-200 flex flex-col items-center justify-center h-screen ">
      <div className="w-full max-w-[350px] max-h-[600px] bg-white border border-zinc-300 pb-5">
        <p className="text-center pt-10 text-4xl font-bold">groupi.</p>
        <Outlet />
      </div>
    </div>
  );
};

export default Welcome;
