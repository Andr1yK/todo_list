import React, {memo} from "react";
import {Todo} from "../todo.typedefs";
import {AddForm} from "../AddForm/AddForm";
import styles from './TodoList.module.scss';

interface Props {
  items: Todo[]
  addTodo: (place: Todo[]) => (title: string) => void;
}

export const TodoList = memo<Props>(({
  items,
  addTodo,
}) => {
  return(
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <div className={styles.item}>
              <span>{item.title}</span>

              <AddForm addTodo={addTodo(item.items)} />
            </div>

            {Boolean(item.items.length) && (
              <TodoList items={item.items} addTodo={addTodo}/>
            )}
          </li>
        ))}
      </ul>
  )
})