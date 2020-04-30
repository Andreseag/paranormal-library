import React, {useRef} from 'react'

const CreateUser = ({ clients, setClients }) => {
  const form = useRef(null);

  const userCreation = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const nickname = formData.get('nickname');
    console.log(nickname);

    if(!clients[nickname]){
      const newClients = {
        ...clients,
        [nickname]: {
          books: {},
          dateCreate: Date.now(),

        }
      }

      setClients(newClients);
    }
  }
  
  return (  
    <div className="create-user__wrapper">
      <form className="create-user" onSubmit={userCreation} ref={form}>
        <input type="text" placeholder="Nickname" name="nickname"/>
        <button type="submit">+</button>
      </form>
    </div>
   );
}
 
export default CreateUser;