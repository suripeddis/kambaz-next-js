/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const HTTP_SERVER =
  process.env.NEXT_PUBLIC_HTTP_SERVER || "http://localhost:4000";

export const addPath = async (a: number, b: number) => {
  const { data } = await axios.get(`${HTTP_SERVER}/lab5/add/${a}/${b}`);
  return data;
};

export const subtractPath = async (a: number, b: number) => {
  const { data } = await axios.get(`${HTTP_SERVER}/lab5/subtract/${a}/${b}`);
  return data;
};

export const addQuery = async (a: number, b: number) => {
  const { data } = await axios.get(`${HTTP_SERVER}/lab5/add`, {
    params: { a, b },
  });
  return data;
};

export const subtractQuery = async (a: number, b: number) => {
  const { data } = await axios.get(`${HTTP_SERVER}/lab5/subtract`, {
    params: { a, b },
  });
  return data;
};

export const fetchWelcomeMessage = async () => {
  const { data } = await axios.get(`${HTTP_SERVER}/lab5/welcome`);
  return data;
};

const ASSIGNMENT_API = `${HTTP_SERVER}/lab5/assignment`;

export const getAssignment = async () => {
  const { data } = await axios.get(ASSIGNMENT_API);
  return data;
};

export const getTitle = async () => {
  const { data } = await axios.get(`${ASSIGNMENT_API}/title`);
  return data;
};

export const updateTitle = async (title: string) => {
  const { data } = await axios.get(`${ASSIGNMENT_API}/title/${title}`);
  return data;
};

export const fetchAssignment = async () => {
  const { data } = await axios.get(ASSIGNMENT_API);
  return data;
};

const TODOS_API = `${HTTP_SERVER}/lab5/todos`;

export const fetchTodos = async () => {
  const { data } = await axios.get(TODOS_API);
  return data;
};

export const removeTodo = async (todo: any) => {
  const { data } = await axios.get(`${TODOS_API}/${todo.id}/delete`);
  return data;
};

export const createNewTodo = async () => {
  const { data } = await axios.get(`${TODOS_API}/create`);
  return data;
};

export const postNewTodo = async (todo: any) => {
  const { data } = await axios.post(TODOS_API, todo);
  return data;
};

export const deleteTodo = async (todo: any) => {
  const { data } = await axios.delete(`${TODOS_API}/${todo.id}`);
  return data;
};

export const updateTodo = async (todo: any) => {
  const { data } = await axios.put(`${TODOS_API}/${todo.id}`, todo);
  return data;
};
