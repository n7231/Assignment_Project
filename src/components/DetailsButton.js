import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom";


export default function DetailsButton({name, username, website, address, phone, email, company, id} ){
  const history = useHistory();
  const handleClick = () => {
    history.push('/details/'+id)
  }
   return(
    <Button onClick={handleClick}>More Details</Button>
  )
}