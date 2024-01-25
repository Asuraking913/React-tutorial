import { AiOutlineHome } from "react-icons/ai";

export default function LinkTag(icon, info) {
  return (
    <div className="flex w-full justify-center items-center">
      <a
        href="#"
        className=" flex items-center justify-center shadow-lg shadow-gray-400 hover:scale-110 ease-in-out duration-200 rounded-full gap-4 bg-gray-300 w-4/5 h-[75px]"
      >
        {icon}

        <p className="text-2xl font-sans font-bold">{info}</p>
      </a>
    </div>
  );
}

//<AiOutlineHome className="text-3xl" />;
