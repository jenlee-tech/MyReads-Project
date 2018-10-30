import React, { Component } from "react";
import * as BooksAPI from "../../BooksAPI";
import Books from "../book";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  state = {
    query: "",
    searchBooks: []
  };

  updateQuery = query => {
    this.setState({
      query: query
    });
    this.updateSearchedBooks(query);
  };

  updateSearchedBooks = query => {
    if (query) {
      BooksAPI.search(query).then(searchBooks => {
        if (searchBooks.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: searchBooks });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchBooks.map(searchedBook => {
              let shelf = "none";
              return (
                <li key={searchedBook.id}>
                  <Books
                    book={searchedBook}
                    moveShelf={this.props.moveShelf}
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
