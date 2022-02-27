const onClickComplete =(index)=>{
    const newIncompleteTodos = [...incompleteTodos]
    newTodos.splice(index,1)

    const newCompleteTodos = [...completeTodos,incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)

    setCompleteTodos(newCompleteTodos)



return(
<button onClick ={() => onClickComplete(index)}
完
</button>
)

