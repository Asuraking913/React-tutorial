import React, { useState } from "react";
import Quote from "./quote";

function App() {
  const [favorite, setFav] = useState(1);

  const [quotes, setQuotes] = useState([
    {
      quotes: "You know no thing Jon snow",
      author: "--Jon Snow",
      id: 1,
    },
    {
      quotes: "With great power comes great responsibility",
      author: "--Andrew Garfield",
      id: 2,
    },
    {
      quotes: "The sun will rise on us again",
      author: "--Thor Odinson",
      id: 3,
    },
  ]);

  function addJoke({ text, e }) {
    e.preventDefault();
    const newObj = {
      quotes: text,
      id: self.crypto.randomUUID(),
    };

    quotes.push(newObj);
    console.log(quotes);
    // console.log(text);
  }

  const quotesList = [];

  for (var i = 0; i < quotes.length; i++) {
    quotesList.push(
      <Quote
        quotes={quotes[i].quotes}
        author={quotes[i].author}
        id={quotes[i].id}
        favorite={favorite === quotes[i].id}
        onFav={setFav}
      />
    );
  }

  return (
    <div className="h-screen bg-black flex items-center justify-center flex-col">
      <h1 className="font-bold capitalize text-3xl">Famous Quotes</h1>

      <p>{quotesList}</p>
    </div>
  );
}

export default App;
