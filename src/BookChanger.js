import React from 'react';

function BookChanger(props) {
    return (            
    <div className="book-shelf-changer">
        <select>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
    )
}

export default BookChanger;