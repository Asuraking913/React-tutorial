import React from "react";
import Form from "./components/form";

function App() {
  function handleClick() {
    console.log("Somethin has been done");
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col gap-6">
        <button
          className="border-white border-4 p-2 bg-gray-900"
          onClick={handleClick}
        >
          Do something
        </button>
        <Form onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
