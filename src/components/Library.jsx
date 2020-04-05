import React , { useState } from 'react';
import Book from './Book';
import Filter from './Filter';
import NoBook from './NoBook';

const Library = ({ books }) => {

  const [booksFiltered, setBooksFiltered] = useState(books)
  
  const arrayBooks = Object.entries(booksFiltered);
  
  
  return ( 
    <div>
      <Filter 
        books={books} 
        setBooksFiltered={setBooksFiltered}
      />
      <div className="shetter">
        {arrayBooks.length ? arrayBooks.map(
          ([id, book])=>(
            <Book {...book}/>  
          )
        ) : <NoBook /> }
      </div>
    </div>
   );
}
 
export default Library;