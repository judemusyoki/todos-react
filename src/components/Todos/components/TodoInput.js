import React, { useState } from 'react';

import { useTodos } from '../store/store';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: 200,
    },
  },
}));

const TodoInput = () => {
  const classes = useStyles();

  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState('');

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <Grid container>
      <Grid item>
        <TextField
          className={classes.textField}
          label='what do you want to do?'
          size='small'
          variant='outlined'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Box pl={1}>
          <Button
            disabled={newTodo.length === 0}
            variant='contained'
            color='primary'
            onClick={handleClick}
          >
            Add Todo
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TodoInput;
