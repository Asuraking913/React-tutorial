export default function  quoteReducer (quotes, action) {
  switch (action.type) {
    case "like_joke":
      return quotes.map(quote => {
        if (quote.author === action.author  ) {
          return {...quote, likes: quote.likes + 1}
        }
        else {
          return quote
        }
      })

    case "dislike_joke":
      return quotes.map(quote => {
        if (quote.author === action.author  ) {
          return {...quote, dislikes: quote.dislikes + 1}
        }
        else {
          return quote
        }
      })
    case "addJoke":
      return [...quotes, action.text]
  }
}