import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";



export default function Details() {
  let { id } = useParams();

  const [cardsInfo, setCardsInfo] = useState({})
  const [curUser, setCurUser] = useState()

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => setCardsInfo(users))
    }, []
  )
console.log("cardsInfo",cardsInfo)
 /*const ar = cardsInfo ? cardsInfo.find(el => el.id === id) : ''
  console.log(ar)
  console.log(id)*/

  //setCurUser(cardsInfo.find(el => el.id === id))

  /*if (!curUser) {
    return <></>
  }*/


  return(
    <div>
      <h1> details page {id}</h1>
    </div>
    )
}