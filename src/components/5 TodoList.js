import React, {useState} from 'react';

export default function TodoList( {todo, completeTodo, deleteHandlers, updateHandler } ) {
    return (
        <div className="">
            <div
                className=''
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
            >
                <button
                    onClick={() => completeTodo(todo.id)}
                />
                {(todo.isCompleted) ? (
                    <p className="">{ todo.text }</p>
                ):(
                    <p>{ todo.text}</p>
                )}
                <button
                    onClick={() => deleteHandlers(todo.id)}
                />
            </div>
        </div>
      )
 }

