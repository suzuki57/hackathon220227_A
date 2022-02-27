import React, { useState } from 'react';

export default function CREATE(): JSX.Element {

  const initialState = [
    {
        task: 'Learn vue.js',
        isCompleted: false
    },
    {
        task: 'Learn React Hook',
        isCompleted: false
    },
    {
        task: 'Learn Gatsby.js',
        isCompleted: false
    },     
]

const [todos, setTodo] = useState(initialState);

  return (
    <div>
      <h1>ToDoリスト</h1>
      <p>タスク追加</p>
        <input type="text" name="name" value="name"/>
        <input type="button" name="name" value="投稿！！"/>
      <ul>
        <li>
          { todos.map((todo, index) => (<li key={ index }>{ todo.task }</li>))}
        </li>
      </ul>
    </div> 
  );
}