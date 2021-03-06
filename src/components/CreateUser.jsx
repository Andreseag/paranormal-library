import React, {useRef, useState} from 'react'

const CreateUser = ({ clients, setClients }) => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const userCreation = (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(form.current);
    const nickname = formData.get('nickname').toLocaleLowerCase().replace(/ /g, '');
    console.log(nickname);

    if(!clients[nickname] && nickname){
      const newClients = {
        ...clients,
        [nickname]: {
          books: {},
          dateCreate: Date.now(),

        }
      }

      setClients(newClients);
    } else {
      setError(nickname ? `Usuario ${nickname} ya existe` : 'Debes definir un usuario');
    }
  }
  
  return (  
    <div className="create-user__wrapper">
      <form className="create-user" onSubmit={userCreation} ref={form}>
        <input type="text" placeholder="Nickname" name="nickname"/>
        <button type="submit">+</button>
      </form>

      { 
        error && <small className="error">{error}</small>
      }
      
    </div>
   );
}
 
export default CreateUser;