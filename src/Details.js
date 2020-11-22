import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";



export default function Details() {
  let { id } = useParams();

 // const [cardsInfo, setCardsInfo] = useState({})
 // const [curUser, setCurUser] = useState()
 const [user, setUser] = useState({})

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then( response => response.json())
    .then( user => setUser(user))
    }, []
  )
console.log("user",user)
 /*const ar = cardsInfo ? cardsInfo.find(el => el.id === id) : ''
  console.log(ar)
  console.log(id)*/

  //setCurUser(cardsInfo.find(el => el.id === id))

  /*if (!curUser) {
    return <></>
  }*/


  return(
    <div>
       details page {user.name}
      <br/>
      {user.username}
      {/* <br/>
      {user.website}
      <br/>
      {user.address}
      <br/>
      {user.phone}
      <br/>
      {user.email}
      <br/>
      {user.company.name} */}
      
    </div>
    )
}