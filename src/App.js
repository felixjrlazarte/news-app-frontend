import React from 'react';
import {
  makeStyles,
  Container,
  Paper,
  Grid
} from '@material-ui/core';
import NewsList from './components/NewsList';
import Article from './components/Article';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: '95vh',
    maxHeight: '95vh',
  },
}));

const App = () => {
  const classes = useStyles(); 

  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <NewsList />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Article />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
