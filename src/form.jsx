export default function Form({ onSubmit }) {
  return (
    <form action="#" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        id="Text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        className="text-black"
      />
      <button className="hover:border-white hover:border-2">Sumbit</button>
    </form>
  );
}
