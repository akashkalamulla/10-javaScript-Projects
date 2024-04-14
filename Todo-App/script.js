const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoE1.classList.add("completed");
        }

        todoE1.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            updateLS();
        });

        todoE1.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoE1.remove();
            updateLS();
        });
    }
}