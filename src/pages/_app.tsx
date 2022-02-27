import React,{useState} from 'react';
import './stylesheet.css'
// import '../style/globals.css'


{/* <head>
<link href="/dist/output.css" rel="stylesheet">

</head> */}
function App() {
    const [todoText,setTodoText] =useState("");
    const [inCompleteTodos, setInCompleteTodos] = useState(["交通経路の確認","持って行く衣類を選ぶ"]);
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
    

        const updateTodos:any = user;
        newIncompleteTodos.splice(index,1, updateTodos);
        // const newIncompleteTodos_u = [newIncompleteTodos, updateTodos];
    
        setInCompleteTodos(newIncompleteTodos);


      };
 
  return (
    <div className="app">
        <div className=''>
            <h1 className='title'>淡路島 引っ越し準備</h1>
            <div className='input-area'>
                <input  placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText}></input>
                <button onClick={onClickAdd}>やることを追加</button>
            </div>
            <div className='body__todo'>
                <ul>
                    {inCompleteTodos.map((todo, index)=>{
                        return(
                            <div key={todo} className="incomplete-area">
                                <li>{todo}</li>
                                {/* <button onClick ={() => onClickComplete(index)}>完了</button> */}
                                <button onClick={() =>onClickDelete(index)}>削除する</button>
                                <button  onClick={() =>onClickUpdate(index)}>変更する</button>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    </div>

  );};

export default App;