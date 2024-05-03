const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleToDosubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    PaintToDo(newToDo);
}

function PaintToDo(newToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    li.appendChild(span);
    span.innerText =newToDo;

    deleteButton.innerText = "X";
    deleteButton.className = "button-name";
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(deleteButton);

}

toDoForm.addEventListener("submit",handleToDosubmit);