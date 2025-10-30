import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = { id?: string; title: string };
type TodosState = {
  todos: { id: string; title: string }[];
  todo: Todo;
};

const initialState: TodosState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [
        ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todo = { title: "" };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload.id ? action.payload : t
      );
      state.todo = { title: "" };
    },
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
