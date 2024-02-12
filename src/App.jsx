import Form from "./form";

function App() {
  function handleSumbit() {
    console.log("Form Sumbitted");
  }

  function handleClick() {
    console.log("Button clicked");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="hover:border-white hover:border-2"
        onClick={handleClick}
      >
        Do something!!
      </button>
      <Form />
    </div>
  );
}

export default App;
