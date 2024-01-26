export default function LinkTag(props) {
  return (
    <div className="w-[80%] flex flex-col items-center justify-center ">
      <a
        href=""
        className="flex rounded-full hover:scale-110 duration-200 ease-in shadow-lg shadow-gray-500 gap-4 p-4 items-center justify-center text-2xl capitalize bg-gray-300 w-full"
      >
        <p className="capitalize text-3xl">{props.icon}</p>

        <p className="font-bold">{props.info}</p>
      </a>
    </div>
  );
}
