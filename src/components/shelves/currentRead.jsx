import React, { Component } from 'react';
class CurrentRead extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books />
                  </li>
                </ol>
              </div> );
    }
}
 
export default currentRead;