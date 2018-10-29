import React from "react";
import { Route } from "react-router-dom";
import SearchPage from "./components/pages/searchpage";
import MainPage from "./components/pages/mainpage";

//import SearchPage from "./components/pages/searchpage";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage bookList={this.state.books} moveShelf={this.moveShelf} />
          )}
        />

        <Route
          path="/search"
          render={() => <SearchPage moveShelf={this.moveShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
