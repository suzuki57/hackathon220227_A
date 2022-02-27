import React,{useState} from 'react';


function App() {
    const [todoText,setTodoText] =useState("");
    const [inCompleteTodos, setInCompleteTodos] = useState(["aiueo","アイウエオ"]);
    // const[CompleteTodos, setCompleteTodos] = useState(["うううう"])

    const onChangeTodoText =(event:any) => setTodoText(event.target.value);
    const onClickAdd =() => {
        if(todoText==="") return;
        const newTodos =[...inCompleteTodos,todoText];
        setInCompleteTodos(newTodos);
        setTodoText("");
    }
    const onClickDelete = (index:any) => {
        const newTodos = [...inCompleteTodos]
        newTodos.splice(index,1);
        setInCompleteTodos(newTodos);
    } 

    // const onClickComplete =(index:any)=>{
    //     const newInCompleteTodos = [...inCompleteTodos]
    //     newInCompleteTodos.splice(index,1)
    
    //     const newCompleteTodos = [...inCompleteTodos,inCompleteTodos[index]];
    //     setInCompleteTodos(newInCompleteTodos);
    //     setCompleteTodos(newCompleteTodos);
    // }




    // const onClickChabge = (index:any) => {
    //     const [Value,setValue] =useState("");
    //     const 
    // }

    const onClickUpdate = (index: any) => {
        const user = window.prompt('何に変更しますか？', '');
        const newIncompleteTodos = [...inCompleteTodos];
        // newIncompleteTodos.splice(index,1);
    

        const updateTodos = user;
        newIncompleteTodos.splice(index,1, updateTodos);
        // const newIncompleteTodos_u = [newIncompleteTodos, updateTodos];
    
        setInCompleteTodos(newIncompleteTodos);


      };
 
  return (
    <div className="app">
        <div className=''>
            <h1 className=''>My TodoList</h1>
            <div>
                <input  placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}></input>
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className='body__todo'>
                <ul>
                    {inCompleteTodos.map((todo, index)=>{
                        return(
                            <div key={todo}>
                                <li>{todo}</li>
                                {/* <button onClick ={() => onClickComplete(index)}>完了</button> */}
                                <button onClick={() =>onClickDelete(index)}>削除</button>
                                <button  onClick={() =>onClickUpdate(index)}>編集</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>

  );};

export default App;