import React, { useState, useEffect } from 'react'
import Box from './components/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 control: {
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
 const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((users)=> setUsers(users))
    }, []
  )
  console.log(users)
  
  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={4}>
 
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
   
   </Grid>
   </Grid>
   </Grid>
  )
  }

export default App
