import React, { Component } from "react";
import Books from "../Book";
import { Link } from "react-router-dom";

class MainPage extends Component {
  state = {};
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/*filtering books that equal to currentlyReading, then passing the book to Books component*/}
                  {this.props.bookList
                    .filter(book => book.shelf === "currentlyReading")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          changeShelf={this.props.changeShelf}
                          currentShelf="currentlyReading"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/*filtering books that equal to wantToRead, then passing the book to Books component*/}
                  {this.props.bookList
                    .filter(book => book.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          changeShelf={this.props.changeShelf}
                          currentShelf="wantToRead"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/*filtering books that equal to read, then passing the book to Books component*/}
                  {this.props.bookList
                    .filter(book => book.shelf === "read")
                    .map(book => (
                      <li key={book.id}>
                        <Books
                          book={book}
                          changeShelf={this.props.changeShelf}
                          currentShelf="read"
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
