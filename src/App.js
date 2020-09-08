import * as styles from './App.module.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import TodoList from './components/TodoList/TodoList';
import ColumnContainer from './containers/ColumnContainer/ColumnContainer';
import RowContainer from './containers/RowContainer/RowContainer';

const App = () => {
  const [displayTodoList, setDisplayTodoList] = useState(false);
  const [todoLists, setTodoLists] = useState([]);
  let todoListId = 0;

  const createTodoListHandler = () => {
    setDisplayTodoList(!displayTodoList);
    setTodoLists([...todoLists, { id: todoListId++ }]);
  };

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
        <RowContainer wrap={true}>
          {todoLists.map(() => (
            <TodoList />
          ))}
        </RowContainer>
      </ColumnContainer>
    </div>
  );
};

export default App;
