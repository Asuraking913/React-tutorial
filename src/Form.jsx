export default function Form() {
  return (
    <form action="#" onSubmit={handleSumbit}>
      <input
        type="text"
        name="text"
        id="Text"
        onChange={handleChange}
        className="text-black"
      />
      <button
        className="hover:border-white hover:border-2"
        onSubmit={handleSumbit}
      >
        Sumbit
      </button>
    </form>
  );
}
