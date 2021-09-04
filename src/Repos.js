import React from 'react';
import Grid from '@material-ui/core/Grid';
export default function Repos(props){
  const repos = props.repos;
    return(
        <>
        {repos.map(repos => (
          <Grid key={repos.id} className='station' style={{align:"left"}} >
              <h4>{repos.name}</h4>
              <p>{repos.description} <a href={repos.html_url}>    Link</a></p>
              
              </Grid>
        ))}
      </>
    );
}