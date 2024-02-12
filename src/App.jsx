import Form from "./form";

function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  function handleSumbit() {
    console.log("Form submitted");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="hover:border-white hover:border-2"
        onClick={handleClick}
      >
        Do something!!
      </button>
      <Form onSubmit={handleSumbit} />
    </div>
  );
}

export default App;
