import React, { FC } from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import BookList from "./components/BookList";
import SelectBook from "./components/SelectBook";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SelectBook />
        </Route>
        <Route
          path="/list/:keyword"
          render={(props) => <BookList keyword={props.match.params.keyword} />}
        />
        {/* <Route path="/list/:keyword">
          <BookList keyword={this.props.match.params.keyword} />
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
