import {React, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Resume.css';
import Repos from './Repos';
import Pdf from "react-to-pdf";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor:"grey",
    paddingLeft: 6,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    backgroundColor:"#30303f",
    minHeight: "30vh",
    paddingLeft: 20,
  },
  contacts: {
    textAlign: 'left',
  },
  heading:{
    textAlign: "center",
    minHeight: "10vh",
  }
}));

export default function Resume(props) {
    const classes = useStyles();
    console.log(props.data);
    console.log(props.repo);
    const repos = props.repo;
    const ref = createRef();
  return (
    <div className={classes.root} ref={ref} id="root">
      <Grid container spacing={1} >
        <Grid item xs={1}>
          <img alt="Candidate" src={props.data.avatar_url} id="image" style={{width:"8vw"}}></img>
          </Grid>
        <Grid item xs={11}>
          <div className={classes.heading}>
              <h1>{props.data.name}</h1>
                <p>{props.data.bio}</p>
              </div>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><h2>Projects </h2><Repos repos={repos}/></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Experience<p><a href={props.data.organizations_url}>Link</a></p></Paper>
          
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Education</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><h2>Skills</h2>
          <>
        {repos.map(repos => (
          <p key={repos.language} className='station' style={{align:"left"}} >{repos.language}
              
              </p>
        ))}
      </>
            </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              Interests
              </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Contact<ul className={classes.contacts}>
              <li>
                  phone 
              </li>
              <li>
                    {props.data.location}
                </li>
                <li>Email
                    {props.data.email}
                </li>
                <li>
                    <p><a href={props.data.twitter_username}>Twitter</a></p>
                </li>
              </ul></Paper>
        </Grid>
      </Grid><br/>
      <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} style={{cursor: "pointer"}} className={classes.buttonDownload}>
              Download your CV
            </button>
          )}</Pdf>
    </div>
  );
}
