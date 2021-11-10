import React from 'react';
import BookChanger from './BookChanger';

function Book (props) {

    let makeUrlProp = (bookCoverUrl) => {
        return `url("${bookCoverUrl}")`;
    }

    return (
        <li>
        <div className="book">
            <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `${makeUrlProp(props.book.cover)}` }}></div>
            <BookChanger />
            </div>
            <div className="book-title">{props.book.name}</div>
            <div className="book-authors">{props.book.author}</div>
        </div>
        </li>
    );

}

export default Book;
