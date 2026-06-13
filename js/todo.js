const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function updateTodos(newTodos){
    toDos = newTodos;
    saveTodo();
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    updateTodos(
        toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    );
}

function paintTodo(newtodo){
    const li = document.createElement("li");
    li.id = newtodo.id;
    const span = document.createElement("span");
    span.innerText = newtodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteTodo);  
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function submitTodo(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    updateTodos([...toDos,newTodoObj]);
    paintTodo(newTodoObj);
}

todoForm.addEventListener("submit",submitTodo);

const saveTodos = localStorage.getItem("todos");

if(saveTodos !== null){
    const parsedTodos = JSON.parse(saveTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo)
}