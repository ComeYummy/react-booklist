import React, { FC } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import BookList from "./components/BookList";
import getDataFromAPI from "./Api";

const App: FC = () => {
  const languages = ["React", "Vue", "Angular"];
  return (
    <BrowserRouter>
      <div>
        <h1>React App</h1>
        <ul>
          <li>
            <Link to="/">React</Link>
          </li>
          <li>
            <Link to="/vue">Vue</Link>
          </li>
          <li>
            <Link to="/angular">Angular</Link>
          </li>
        </ul>
        <hr />
        <Route
          exact
          path="/"
          render={(props) => (
            <BookList
              language={languages[0]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          path="/vue"
          render={(props) => (
            <BookList
              language={languages[1]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
        <Route
          path="/angular"
          render={(props) => (
            <BookList
              language={languages[2]}
              getData={(keyword) => getDataFromAPI(keyword)}
            />
          )}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
