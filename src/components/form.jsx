export default function Form({ onChange }) {
  function handleSumbit(e) {
    e.preventDefault();
    console.log("Form has been submitted");
    const value = 5;
    console.log(`New Value: ${value}`);
  }

  return (
    <div>
      <form action="" className="flex gap-4" onSubmit={handleSumbit}>
        <input
          type="text"
          name="text"
          id="text"
          className="bg-gray-500 p-2"
          onChange={onChange}
        />
        <button className="border-white border-4 p-2 bg-gray-900">
          Submit
        </button>
      </form>
    </div>
  );
}
