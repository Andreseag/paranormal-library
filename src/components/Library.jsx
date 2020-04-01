import React from 'react';
import Book from './Book';
import Filter from './Filter';

const Library = ({ books }) => {
  return ( 
    <div>
      <Filter />
      <div className="shetter">
        {Object.entries(books).map(([id, book])=>(
            <Book {...book}/>  
          ))
        }
      </div>
    </div>
   );
}
 
export default Library;