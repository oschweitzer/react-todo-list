import * as styles from './App.module.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import ColumnContainer from './containers/ColumnContainer/ColumnContainer';
import RowContainer from './containers/RowContainer/RowContainer';
import { removeItemFromArray } from './utils/Utils';

const App = () => {
  // --------------- State --------------------
  // Here we are storing the todo lists in an array and incrementing the lists ids
  // Of course this has to be done using a server and a database.
  const [todoLists, setTodoLists] = useState([]);

  // --------------- Handlers --------------------
  const createTodoListHandler = () => {
    setTodoLists([...todoLists, { id: Math.random().toString() }]);
  };

  const onRemoveList = (todoListId) => {
    setTodoLists(removeItemFromArray(todoLists, todoListId));
  };

  // --------------- Rendering --------------------
  return (
    <div className={styles.app}>
      <NavBar />
      <ColumnContainer>
        <button
          title={'Create todo list'}
          className={styles['todo-list-creation-button']}
          onClick={createTodoListHandler}
        >
          Create Todo List
        </button>
        <RowContainer flexWrap>
          {todoLists.map((list) => (
            <TodoList
              key={list.id}
              listId={list.id}
              onRemoveList={onRemoveList}
            />
          ))}
        </RowContainer>
      </ColumnContainer>
    </div>
  );
};

export default App;
