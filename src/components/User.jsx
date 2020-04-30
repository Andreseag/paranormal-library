import React from 'react';

const User = ({name, books, dateCreate}) => (
    <div className="user user__hightlight">
        <h3>{name}</h3>
        <figure className="user__books">
            <img
                src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                alt="book"
            />
            <img
                src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                alt="book"
            />
            <img
                src="http://debakatas.com/cover/enlasmontanasdelalocura.jpg"
                alt="book"
            />
        </figure>
    </div>
);

export default User;
