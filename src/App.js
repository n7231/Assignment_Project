import React, { useState, useEffect } from 'react'
import Box from './components/Box'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setUsers(users))
    }, []
  )
  console.log(users)
  
  return (
   <div style= {{width:400, height: 400}}> 
     {users.map((user) => 
        <Box 
          key = {user.id}
          name={user.name} 
          username={user.username} 
          website={user.website}
          address={user.address}
          phone={user.phone}
          email={user.email}
          company={user.company.name}
          id={user.id}
        />
      )}
   </div>
  )
  }

export default App
