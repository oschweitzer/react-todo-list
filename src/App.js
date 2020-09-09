import * as styles from './App.module.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import ColumnContainer from './containers/ColumnContainer/ColumnContainer';
import RowContainer from './containers/RowContainer/RowContainer';

const App = () => {
  // --------------- State --------------------
  const [displayTodoList, setDisplayTodoList] = useState(false);
  // Here we are storing the todo lists in an array and incrementing the lists ids
  // Of course this has to be done using a server and a database.
  const [todoLists, setTodoLists] = useState([]);
  let todoListId = 0;

  // --------------- Handlers --------------------
  const createTodoListHandler = () => {
    setDisplayTodoList(!displayTodoList);
    setTodoLists([...todoLists, { id: todoListId++ }]);
  };

  // --------------- Rendering --------------------
  return (
    <div className={styles.app}>
      <NavBar />
      <ColumnContainer>
        <button
          className={styles['todo-list-creation-button']}
          onClick={createTodoListHandler}
        >
          Create Todo List
        </button>
        <RowContainer wrap>
          {todoLists.map(() => (
            <TodoList />
          ))}
        </RowContainer>
      </ColumnContainer>
    </div>
  );
};

export default App;
