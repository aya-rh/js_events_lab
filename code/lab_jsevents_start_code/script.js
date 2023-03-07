const button = document.querySelector("#enter");
const list = document.querySelector("#list");
const toDo = document.querySelector("#new-todo");


// add button listener function
button.addEventListener("click", () => {
    const newListItem = document.createElement("li");
    newListItem.innerText = toDo.value;
    addDeleteButton(newListItem);
    addCompletedButton(newListItem);
    list.appendChild(newListItem); 
    toDo.value = "";
});

// add delete button
const addDeleteButton = (newListItem) => {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    newListItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        newListItem.remove()
    }
)};

// add a "completed" button
const addCompletedButton = (newListItem) => {
    const completedButton = document.createElement("button");
    completedButton.innerText = "Complete!";
    newListItem.appendChild(completedButton);
    completedButton.addEventListener("click", () => {
        newListItem.style.color = "grey";
        newListItem.style.textDecoration = "line-through";
    }
)};