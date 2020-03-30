import React from 'react';
import Book from './Book';
import Filter from './Filter';

const Library = () => {
  return ( 
    <div>
      <Filter />
      {'.'
        .repeat(5)
        .split('')
        .map(()=>(
          <Book />  
        ))
      }
    </div>
   );
}
 
export default Library;