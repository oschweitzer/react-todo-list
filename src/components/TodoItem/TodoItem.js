import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InputTextValidation from '../InputTextValidation/InputTextValidation';
import * as styles from './TodoItem.module.css';

const TodoItem = (props) => {
  // --------------- State --------------------
  const [completed, setCompleted] = useState(false);

  // --------------- Handlers -----------------
  const onCheckBoxChange = () => {
    setCompleted(!completed);
  };

  // --------------- CSS Class -----------------
  const todoItemTextClass = completed ? styles.line : '';

  // --------------- Rendering Logic -----------------
  let item = (
    <div className={styles['todo-item']}>
      <span className={todoItemTextClass}>{props.description}</span>
      <input type='checkbox' checked={completed} onChange={onCheckBoxChange} />
    </div>
  );
  if (props.editionMode) {
    item = (
      <InputTextValidation
        placeholder={'Todo...'}
        onValidation={props.onTodoItemCreation}
      />
    );
  }

  return <div>{item}</div>;
};

TodoItem.propTypes = {
  description: PropTypes.string.isRequired,
  onTodoItemCreation: PropTypes.func,
  editionMode: PropTypes.bool,
};

TodoItem.defaultProps = {
  onTodoItemCreation: () => null,
  editionMode: false,
};

export default TodoItem;
