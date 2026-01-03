//difference between function and react function call


function ToDo() {
    return (
        <div>
            <h1>ToDo</h1>
            <button onClick={()=>addTodo('apple')}>Apple</button> 
            <button onClick={()=>addTodo('banana')}>Banana</button> 
        </div>
    )
}

function addTodo(text){
    console.log(text);
}

export default ToDo;