// import dotenv from 'dotenv';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Grid, withStyles } from '@material-ui/core';
import AllTeams from './containers/AllTeams';

const styles = (theme) => ({
  appContainer: {
    maxWidth: '800px',
    background: theme.palette.primary.main,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1rem auto',
  },
  containerWidth: { maxWidth: '800px' },
});

function App({ classes }) {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await axios.get(process.env.REACT_APP_BACKEND_URL);
    setTeams(response.data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <Grid className={classes.appContainer}>
      <Route
        exact
        path="/"
        render={(props) => <AllTeams {...props} teams={teams} />}
      />
      {/* <Route
        path="/teams/:id"
        render={(props) => (
          <TeamCard
            {...props}
            teams={teams}
          />
        )}
      />*/}
    </Grid>
  );
}

export default withStyles(styles)(App);
