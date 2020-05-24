import React, { FC } from "react";
import BookList from "./components/BookList";
import { BrowserRouter, Route, Link } from "react-router-dom";

const App: FC = () => {
  const languages = ["React", "Vue", "Angular"];
  return (
    <div>
      <h1>React App</h1>
      <BookList language={languages[0]} />
      <BookList language={languages[1]} />
      <BookList language={languages[2]} />
    </div>
  );
};

export default App;
