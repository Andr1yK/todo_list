import React, {useCallback, useState} from 'react';
import { TodoList } from './components/TodoList/TodoList';
import {Todo} from "./components/todo.typedefs";
import {AddForm} from "./components/AddForm/AddForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (place: Todo[]) => (title: string) => {
    place.push({
      id: Math.random(),
      title,
      items: [],
    });

    setTodos((todos) => [...todos]);
  };

  return (
    <div className="App">
      <AddForm addTodo={addTodo(todos)} />
      <TodoList items={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
