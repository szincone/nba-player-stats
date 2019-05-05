import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = (theme) => ({
  title: {
    color: theme.palette.secondary.main,
    marginBottom: '.75rem',
    textAlign: 'center',
  },
  addNewButton: {
    background: theme.palette.secondary.main,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    borderRadius: '4px',
    cursor: 'pointer',
    padding: '.25rem .5rem',
    marginBottom: '.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  singleCardWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singleCard: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    margin: '.5rem',
    textAlign: 'center',
    padding: '.5rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px 4px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '150px',
    minWidth: '240px',
    maxWidth: '241px',
    // connects delete w/ main card
    marginBottom: '0',
    borderBottom: 'none',
    '&:hover': {
      background: theme.palette.secondary.contrastTextLight,
    },
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  deleteButton: {
    background: theme.palette.primary.contrastText,
    marginBottom: '.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
    minWidth: '240px',
    maxWidth: '241px',
    borderRadius: '0 0 4px 4px',
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      background: theme.palette.primary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
  },
  cardText: {
    color: theme.palette.secondary.main,
  },
  dialogTitle: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    fontSize: '1.75rem',
    fontWeight: 'bold',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderBottom: 'none',
  },
  dialogActions: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: '1.75rem',
    fontWeight: 'bold',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderTop: 'none',
  },
  cancelDialogButton: {
    background: theme.palette.secondary.contrastText,
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
    '&:hover': {
      background: theme.palette.secondary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
  },
  deleteDialogButton: {
    marginLeft: '5px',
    background: theme.palette.primary.contrastText,
    color: theme.palette.secondary.textColor,
    fontWeight: 'bold',
    '&:hover': {
      background: theme.palette.primary.contrastTextLight,
      color: theme.palette.secondary.main,
    },
  },
});

function AllTeams(props) {
  const { classes } = props;
  const [dialogBool, setDialogBool] = useState(false);
  const [currentTeam, setCurrentTeam] = useState('');
  const handleDialog = (curTeam) => {
    if (curTeam) {
      setCurrentTeam(curTeam.id);
    }
    setDialogBool(!dialogBool);
  };
  const useDeleteHandler = () => {
    props.deleteHandler(currentTeam);
    setCurrentTeam('');
    setDialogBool(!dialogBool);
  };
  return (
    <>
      {/* delete modal */}
      <Dialog
        open={dialogBool}
        onClose={handleDialog}
        aria-labelledby="delete"
        aria-describedby="confirmation"
      >
        <DialogContent className={classes.dialogTitle}>
          Are you sure you want to delete the team?
        </DialogContent>
        <DialogContent className={classes.dialogActions}>
          <Button onClick={handleDialog} className={classes.cancelDialogButton}>
            Cancel
          </Button>
          <Button
            onClick={useDeleteHandler}
            className={classes.deleteDialogButton}
            autoFocus
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>
      {/* end delete modal */}
      <Typography variant="h4" className={classes.title}>
        NBA Teams{' '}
        <span role="img" aria-label="basketball emoji">
          🏀
        </span>
      </Typography>
      <Grid className={classes.cardContainer}>
        {props.teams
          .filter((team) => team.name !== '')
          .map((team) => (
            <Grid className={classes.singleCardWrapper} key={team.id}>
              <Link
                to={`/teams/${team.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <Grid className={classes.singleCard}>
                  <Typography variant="h6" className={classes.cardText}>
                    {team.name.length > 10
                      ? team.name.substring(0, 9) + '...'
                      : team.name}
                  </Typography>
                  <Typography variant="h6" className={classes.cardText}>
                    <span style={{ fontStyle: 'italic' }}>PPG: </span>
                    {team.pointsPerGame}
                  </Typography>
                </Grid>
              </Link>
              <Button
                className={classes.deleteButton}
                onClick={() => handleDialog(team)}
              >
                Delete
              </Button>
            </Grid>
          ))}
      </Grid>
    </>
  );
}

export default withStyles(styles)(AllTeams);
