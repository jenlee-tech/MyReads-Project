import React, { Component } from "react";
class Read extends Component {
  state = {};
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Books />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Read;
