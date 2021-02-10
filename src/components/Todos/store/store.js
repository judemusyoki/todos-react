import React, { useContext, createContext } from 'react';
import useLocalStorage from '../../../hooks/useLocalStorage';

const Context = createContext(
  // Default context
  {
    todos: [],
  }
);

const Provider = (props) => {
  // children are all the child components in this component
  const { children } = props;
  const [todos, setTodos] = useLocalStorage('todos', [
    {
      id: 0,
      text: 'feed the dog',
      completed: false,
    },
    {
      id: 1,
      text: 'go shopping',
      completed: false,
    },
    {
      id: 2,
      text: 'read the book',
      completed: false,
    },
  ]);

  const addTodo = (text) => {
    // Map over all todos and get the max's id and that becomes nextId
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 0;
    const newTodo = {
      id: nextId,
      text, // key and value is text
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const foundTodo = todos.find((todo) => todo.id === id);
    if (foundTodo) {
      foundTodo.completed = !foundTodo.completed;
    }

    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return foundTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <Context.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </Context.Provider>
  );
};

export const useTodos = () => useContext(Context);

export const withProvider = (Component) => {
  return (props) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
};
