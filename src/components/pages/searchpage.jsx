import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";
import Books from "../Book";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = {
    query: "",
    searchBooks: []
  };

  //this updates the state - based on updateSearchedBooks
  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateSearchedBooks(query);
  };

  //this searches through the books base on user's input in Search field
  updateSearchedBooks = query => {
    if (query) {
      //if there is input do this
      BooksAPI.search(query).then(searchBooks => {
        if (searchBooks.error) {
          this.setState({ searchBooks: [] }); //if there is an error, searchBooks remains empty
        } else {
          this.setState({ searchBooks: searchBooks }); //else provide the results of the search
        }
      });
    } else {
      //else keep searchBooks empty
      this.setState({ searchBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            {/*links back to root*/}
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query} //detects event change and starts updateQuery
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        {/*after going through updateQuery, then searchBooks goes through map*/}
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks.map(searchedBook => {
              let shelf = "none";
              this.props.books.map(
                book =>
                  book.id === searchedBook.id ? (shelf = book.shelf) : ""
              );
              return (
                <li key={searchedBook.id}>
                  <Books
                    book={searchedBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
