import React from "react";

function quoteform() {
  return (
    <div>
      <form
        action=""
        className="flex items-center justify-center m-4"
        onSubmit={addJoke}
      >
        <div className="flex flex-col justify-center items-center gap-2">
          <input type="text" className="bg-gray-400" />
          <button className="capitalize bg-blue-700 p-2 border-white border-2 ">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default quoteform;
