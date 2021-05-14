import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {

const todos = [
  {
    id: 1,
    text: '할 일 1',
    checked: false
  },
  {
    id: 2,
    text: '할 일 2',
    checked: false
  },
  {
    id: 3,
    text: '할 일 3',
    checked: true
  },
  {
    id: 4,
    text: '할 일 4',
    checked: true
  },
]

  return (
    <>
      <div className="TodoList">
        {/* map함수는 key값 필요 */}
        {todos.map(todo=> <TodoListItem todo={todo} key={todo.id} />)}  
      </div>
      
    </>
  )
}

export default TodoList;