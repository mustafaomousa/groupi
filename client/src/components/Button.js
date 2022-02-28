const Button = (props) => {
  return (
    <button
      {...props}
      className="h-6 rounded bg-indigo-700 px-1.5 py-1 text-[10px] font-bold uppercase text-white shadow hover:bg-sky-600 disabled:bg-zinc-200 md:h-7 md:text-[12px]"
    />
  );
};

export default Button;
