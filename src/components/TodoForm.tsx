import { Add } from '@mui/icons-material';
import { Box, IconButton, Input } from '@mui/material';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/TodoSlice';
import { useState } from 'react';

function TodoForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  return (
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Input
        placeholder="Add Your Todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton onClick={() => dispatch(ADD(value))}>
        <Add />
      </IconButton>
    </Box>
  );
}

export default TodoForm;
