import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setUsers(users));
  }
    )
    console.log(users)


  return (
   
    
   <div>
    
  {users.map((user, index) => 
          <div key={index}>
         <li>
          
            {user.name}
            </li>
            <li>{user.username}
            </li>
            <li> {user.website}
           </li>
          </div>

  )} 
     </div>
  );
  }

export default App;
