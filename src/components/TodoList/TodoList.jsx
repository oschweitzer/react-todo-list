import React, { useState } from 'react';
import InputTextValidation from '../InputTextValidation/InputTextValidation';
import TodoItem from '../TodoItem/TodoItem';
import { formatTitle } from '../../utils/Utils';
import ColumnContainer from '../../containers/ColumnContainer/ColumnContainer';
import IconButton from '../IconButton/IconButton';
import { FaTimes } from 'react-icons/fa';
import RowContainer from '../../containers/RowContainer/RowContainer';
import { PropTypes } from 'prop-types';

const TodoList = (props) => {
  // --------------- State --------------------
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([]);
  const [isListCreated, setIsListCreated] = useState(false);

  // --------------- Handlers -----------------
  const onTodoItemCreation = (description) => {
    if (description) {
      setItems([
        ...items,
        {
          description,
        },
      ]);
    }
  };

  const onListCreation = (text) => {
    if (text) {
      setTitle(formatTitle(text));
      setIsListCreated(true);
    }
  };

  // -------------------- Rendering logic ------------
  let list = null;
  let inputTextComponent = (
    <InputTextValidation
      placeholder={'Todo list title'}
      onValidation={onListCreation}
    />
  );
  if (isListCreated) {
    // Once the todo list is created,
    // we remove the list creation input text component
    // and we show the todo items creation component
    list = (
      <div>
        <h3>{title}</h3>
        <TodoItem
          editionMode
          onTodoItemCreation={onTodoItemCreation}
        ></TodoItem>
        {items.map((item) => (
          <TodoItem
            key={item.description}
            description={item.description}
          ></TodoItem>
        ))}
      </div>
    );
    inputTextComponent = null;
  }

  return (
    <ColumnContainer addBorder>
      <RowContainer justifyContent={'flex-end'}>
        <IconButton
          title={'Remove todo list'}
          onClick={() => props.onRemoveList(props.listId)}
        >
          <FaTimes color={'red'} />
        </IconButton>
      </RowContainer>
      {inputTextComponent}
      {list}
    </ColumnContainer>
  );
};

TodoList.propTypes = {
  listId: PropTypes.string.isRequired,
  onRemoveList: PropTypes.func.isRequired,
};

export default TodoList;
