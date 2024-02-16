import React from "react";
import Quote from "./quote";

function App() {
  const quotes = [
    {
      quote: "The sun will shine on us again",
      author: "--Thor Odinson",
      id: "1",
    },
    {
      quote: "Far away beneath the horizon, yet beneath the eyes",
      author: "--Yan",
      id: "2",
    },
    {
      quote: "When the going gets tough, the tough gets going ",
      author: "--Timon",
      id: "3",
    },
  ];

  const quotesList = [];

  for (var i = 0; i < quotes.length; i++) {
    quotesList.push(
      <Quote
        quote={quotes[i].quote}
        author={quotes[i].author}
        id={quotes[i].id}
      />
    );
  }

  return (
    <div className="h-screen w-[100%]">
      <div className="bg-gray-950 justify-center items-center h-screen flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Famous Quotes</h1>
        {quotesList}
      </div>
    </div>
  );
}

export default App;
