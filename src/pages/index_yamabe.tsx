import React, { useState } from 'react';

const Home: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['aaa', 'bvbb']);
  const [completeTods, setCompleteTodos] = useState(['uuuu', 'bbbbb']);

  const onChangeTodoText = (event: any) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index: any) => {
    const newTodos = [...incompleteTodos];
    // const newTodos2 = ['abababaaaaaaaaaaaaaaaaaaaaaa'];
    // 最後の行を削除
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
    // setIncompleteTodos(newTodos2);
  };

  const onClickComplete = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTods, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickUpdate = (index: any) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const updateTodos = ['fafdasfafafda'];
    const newIncompleteTodos_u = [...incompleteTodos, updateTodos];
    setIncompleteTodos(newIncompleteTodos_u);
    // setIncompleteTodos(updateTodos);
  };

  return (
    <main className='mx-auto max-w-6xl py-6'>
      <h1 className='text-lg font-bold text-primary-800'>
        Welcome to Kikagaku Next.js Starter Kit!! ようこそ　キカガク　ねくすとじぇいえす　きっと！！
      </h1>
      {/* 入力 */}
      <div className=' input-area'>
        <input placeholder='aaaaaaa' value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* 未完了todo */}
      <div>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                <button onClick={() => onClickUpdate(index)}>更新</button>
              </div>
            );
          })}
        </ul>
      </div>
      {/* 完了todo */}
      <div>
        <ul>
          {completeTods.map((todo) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Home;