import React from 'react';
import Book from './Book';


function BookShelf(props) {
    // TODO - make book key isbn or something.
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.books.filter(book => book.code === props.code).map(book => <Book key={book.title} book={book} />)
                }
            </ol>
            </div>
        </div>
    );
}

export default BookShelf;
