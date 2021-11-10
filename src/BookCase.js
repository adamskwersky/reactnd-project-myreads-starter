import React from 'react';
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf';

function BookCase(props) {

    const shelves = [
        {
            name: "Currently Reading",
            code: "currentlyReading"
        },
        {
            name: "Want to Read",
            code: "wantToRead"
        },
        {
            name: "Read",
            code: "read"
        }
    ];

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map(shelf => <BookShelf key={shelf.code} name={shelf.name} code={shelf.code} books={props.books} />)}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className="add-contact"> Add a book</Link>
            </div>
          </div>
    )
}

export default BookCase;
