import { Stack, Typography } from '@mui/material';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function TodoApp() {
  return (
    <Stack sx={{ p: '20px', background: '#fff' }}>
      <Typography variant="h1" fontSize="2rem" sx={{ font: 'bold 2rem Arial' }}>
        Todo App
      </Typography>
      <TodoForm />
      <TodoList />
    </Stack>
  );
}

export default TodoApp;
