import React from 'react';
import User from './User';

const Clients = () => {
  return ( 
    <div>
      <h1>
        <span>Biblioteca Paranormal</span>
        <small>0.00</small>
      </h1>

      {'.'
        .repeat(5)
        .split('')
        .map(()=>(
          <User />  
        ))
      }
    </div>
   );
}
 
export default Clients;