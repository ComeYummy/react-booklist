import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router";
import BookList from "./components/BookList";
import SelectBook from "./components/SelectBook";

const App: FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SelectBook} />
        <Route
          path="/list/:keyword"
          render={(props) => <BookList keyword={props.match.params.keyword} />}
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
