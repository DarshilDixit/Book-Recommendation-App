import "./styles.css";
import { useState } from "react";

var bookDB = {
  "Fiction": [
    { name: "Norweigian Wood", rating: "4.5/5" },
    { name: "The great gatsby", rating: "4.5/5" },
    { name: "Alchemist", rating: "4/5" }
  ],
  "Technology": [
    { name: "Swipe to unlock", rating: "4.5/5" },
    { name: "The four", rating: "4/5" },
    { name: "Eloquent javascript", rating: "4/5" }
  ],
  "Self-help": [
    { name: "Think and grow rich", rating: "4.5/5" },
    { name: "Atomic habits", rating: "4.5/5" },
    { name: "Man's serach for meaning", rating: "5/5" }
  ]
};

var genre = Object.keys(bookDB);

export default function App() {
  var [selectedGenre, setGenre] = useState("Fiction")
  function genreClickHandler(genre){
     setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        <span role="img"> 📚 </span> Good Reads!
      </h1>
      <small> Checkout my favorite books. Select a genre to get started </small>

      <div className="btnContainer">
        {genre.map(function (genre) {
          return <button onClick={()=> genreClickHandler(genre)} key={genre}> {genre} </button>;
        })}
      </div>
      <hr />
      <div className="output">
           {bookDB[selectedGenre].map(function(book){
               return  <li key={book.name}> 
                          <div style={{fontSize:"larger"}}>{book.name}</div>
                          <div style={{fontSize:"smaller"}}>{book.rating}</div>   
                      </li>
           })
          }
      </div>

    </div>
  );
}
