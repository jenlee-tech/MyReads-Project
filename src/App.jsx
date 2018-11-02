import React from "react";
import { Route } from "react-router-dom";
import SearchPage from "./components/pages/searchpage";
import MainPage from "./components/pages/mainpage";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  //life cycle event that uses getAll to call the books and change the state - rerenders
  componentDidMount() {
    BooksAPI.getAll().then(respBooks => {
      this.setState({ books: respBooks });
    });
  }

  //this moves the books to different shelves and then updates the state
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then(respBooks => {
      this.setState({ books: respBooks });
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
