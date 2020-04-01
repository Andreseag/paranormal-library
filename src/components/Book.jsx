import React from 'react';

const Book = ({
    title,
    available,
    author,
    cover
}) => (
    <div className="book">
        <figure className="book__img">
            <img
                src={cover}
                alt=""
            />
        </figure>
        <button type="button">Pedir</button>
    </div>
);

export default Book;
