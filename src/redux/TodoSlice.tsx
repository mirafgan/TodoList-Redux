import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

interface TodoInitial {
    id: string;
    text: string;
    completed: boolean;
}

const initialState: TodoInitial = {
    id: nanoid(),
    text: 'Learn Redux',
    completed: false,
};

const TodoSlice = createSlice({
    name: 'todos',
    initialState: [initialState],
    reducers: {
        ADD: (state, action: PayloadAction<string>) => {
            if (action.payload.trim() !== '') state.push({ id: nanoid(), text: action.payload, completed: false });
            return state;
        },
        DELETE: (state, action: PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        UPDATE: (state, action) => {
            state = state.map(t => {
                return t.id === action.payload.id ? { ...t, completed: action.payload.completed, text: action.payload.text } : t
            })
            return state;
        }
    },
});

export default TodoSlice.reducer;
export const { ADD, DELETE, UPDATE } = TodoSlice.actions;
