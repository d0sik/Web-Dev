function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") return; 

    let li = document.createElement("li");
    li.classList.add("todo-item");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        textSpan.classList.toggle("completed", checkbox.checked);
    });
    
    let textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    textSpan.classList.add("todo-text");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);
    input.value = ""; 
}
