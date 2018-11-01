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

  //function that calls all the books and then places all the books in the array as a state
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  //function that moves the books to different shelves and then updates the state
  changeShelf = (book, shelf) => {
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
            <MainPage
              bookList={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchPage
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
