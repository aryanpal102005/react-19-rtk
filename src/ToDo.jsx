function ToDo() {
    function callfun() {
        alert("You clicked the button!");
    }
    return (
        <div>
            <h1>To-Do List</h1>
            alert("Welcome to the To-Do List!");
            <button onClick={callfun}>Click Me</button>
        </div>
    );
}
export default ToDo;