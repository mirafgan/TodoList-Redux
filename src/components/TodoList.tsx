import { Checkbox, IconButton, Input, List, ListItem } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE, UPDATE } from '../redux/TodoSlice';
function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  return (
    <List>
      {todos.map((t) => (
        <ListItem
          key={t.id}
          sx={{ justifyContent: 'space-between', width: '100%' }}>
          <Checkbox defaultChecked={t.completed} onChange={(e) => dispatch(UPDATE({ id: t.id, text: t.text, completed: e.target.checked }))} />
          <Input defaultValue={t.text} onChange={(e) => dispatch(UPDATE({ id: t.id, text: e.target.value, completed: t.completed }))} sx={{ textDecoration: t.completed ? "line-through" : 'none' }} />
          <IconButton onClick={() => dispatch(DELETE(t.id))}>
            <Delete />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
