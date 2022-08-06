import React, {FormEvent, memo, useState} from "react";
import styles from './AddForm.module.scss';

interface Props {
  addTodo: (title: string) => void;
}

export const AddForm = memo<Props>(({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <button
        type="submit"
      >
        Add
      </button>
    </form>
  )
})