import React from 'react';

const TodoListItem = ({todo}) => {

  return (
    <>
      <div className="todo-text">{todo.text}</div>
      <div className="todo-checked">{todo.checked ? 'true': 'false'}</div>
    </>
  )
}

export default TodoListItem;