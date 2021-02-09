import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Todos from '../Todos/Todos';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(2), // Material UI spacing
    },
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs')); // Anything size xs we return matches

  return (
    <Grid
      className={classes.root}
      container
      justify='center'
      alignItems={matches ? 'flex-start' : 'center'}
    >
      <Grid item>
        <Paper elevation={8}>
          <Todos />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
