import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

import DetailsButton from './DetailsButton'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

export default function Box({ 
  name, 
  username, 
  website, 
  address, 
  phone,
  email, 
  company,
  id
}) {
  const classes = useStyles()
  // console.log(name, username, website)
  var x = name.substring(0, 1)
  const websiteUrl = `http://${website}`
return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {x}
          </Avatar>
        }
      />
        {name}
        <br /> 
        {username}
        
        <br /> 
      <a href={websiteUrl}>{websiteUrl}</a>
      </CardContent>
      <CardActions>
        <DetailsButton 
        name={name} 
        username={username}
        website={website}
        address={address}
        phone={phone}
        email={email}
        company={company}
        id={id}/>
      </CardActions>
    </Card>
  )
}
