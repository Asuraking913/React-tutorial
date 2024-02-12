export default function TestTag({ icon, iconText }) {
  return (
    <div className="flex gap-4 mb-4">
      <a href="#" className="flex gap-10 text-3xl bg-gray-300 ">
        <p>{icon}</p>
        <p>{iconText}</p>
      </a>
    </div>
  );
}
