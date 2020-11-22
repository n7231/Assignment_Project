import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


export default function Details() {
  let { id } = useParams();
 const [user, setUser] = useState({})

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then( response => response.json())
    .then( user => setUser(user))
    }, []
  )
console.log("user",user)
 
return(
  <Card style= {{width:400, height: 400, margin:40 }}>
    <CardContent>
    <div>
      <ul>
      -name:{user.name}
      <br/>
      -username:{user.username}
      <br/>
      -email:{user.email}
      <br/>
      -phone:{user.phone}
      <br/>
      -company:{user.company ? user.company.name: "" }
      <br/>
      -website:{user.website}
      <br/> 
      -address:
      <br/> 
      <li>street:{user.address ? user.address.street: "" }</li>
      <br/>
      <li>suite:{user.address ? user.address.suite: "" }</li>
      <br/> 
     <li>city:{user.address ? user.address.city: "" }</li>
     <br/> 
      <li>Zipcode:{user.address ? user.address.zipcode: "" }</li>
      </ul>
     </div>
     </CardContent>
     </Card>
    )
}