import React, {memo} from "react";
import {Todo} from "../todo.typedefs";
import {AddForm} from "../AddForm/AddForm";
import styles from './TodoList.module.scss';

interface Props {
  items: Todo[]
  addTodo: (place: Todo[]) => (title: string) => void;
  removeTodo: (place: Todo[]) => (id: number) => void;
  move: (place: Todo[], type: 'up' | 'down') => (index: number) => void;
}

export const TodoList = memo<Props>(({
  items,
  addTodo,
  removeTodo,
  move
}) => {
  return(
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item.id}>
            <div className={styles.item}>
              <span>{item.title}</span>

              <AddForm addTodo={addTodo(item.items)} />

              <button type="button" onClick={() => removeTodo(items)(item.id)}>
                Remove
              </button>

              {index > 0 && (
                <button type="button" onClick={() => move(items, 'up')(index)}>
                  Up
                </button>
              )}

              {items.length > 1 && index < items.length - 1 && (
                <button type="button" onClick={() => move(items, 'down')(index)}>
                  Down
                </button>
              )}
            </div>

            {Boolean(item.items.length) && (
              <TodoList
                items={item.items}
                addTodo={addTodo}
                removeTodo={removeTodo}
                move={move}
              />
            )}
          </li>
        ))}
      </ul>
  )
})