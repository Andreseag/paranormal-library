import React from 'react';
import User from './User';
import CreateUser from './CreateUser';

const Clients = () => {
  return ( 
    <div>
      <h1 className="cartel">
        <span>Biblioteca Paranormal</span>
        <small>0.00</small>
      </h1>
      <div className="clients">
        <CreateUser />
        {'.'
          .repeat(5)
          .split('')
          .map(()=>(
            <User />  
          ))
        }
      </div>
    </div>
   );
}
 
export default Clients;