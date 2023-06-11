import { Stack, CssBaseline } from '@mui/material';
import TodoApp from './components/TodoApp';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Stack
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #68EACC 0%, #497BE8 100%)',
      }}
    >
      <CssBaseline>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </CssBaseline>
    </Stack>
  );
}

export default App;
