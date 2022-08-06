import React, { useState} from 'react';
import { TodoList } from './components/TodoList/TodoList';
import {Todo} from "./components/todo.typedefs";
import {AddForm} from "./components/AddForm/AddForm";

const ShiftByType = {
  'up': -1,
  'down': 1,
}

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

  const move = (place: Todo[], type: keyof typeof ShiftByType) => (index: number) => {
    const shift = ShiftByType[type];

    [place[index], place[index + shift]] = [place[index + shift], place[index]];

    setTodos((todos) => [...todos]);
  }

  const removeTodo = (place: Todo[]) => (id: number) => {
    const itemToRemoveIndex = place.findIndex((item) => id === item.id);

    if (itemToRemoveIndex !== -1) {
      place.splice(itemToRemoveIndex, 1);

      setTodos((todos) => [...todos]);
    }
  };

  return (
    <div className="App">
      <AddForm addTodo={addTodo(todos)} />
      <TodoList
        items={todos}
        addTodo={addTodo}
        removeTodo={removeTodo}
        move={move}
      />
    </div>
  );
}

export default App;
