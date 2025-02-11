document.addEventListener('DOMContentLoaded', loadTask);

function loadTask() {
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks.forEach(task => addTaskToDOM(task));
}

function addTask() {
    let textInput = document.getElementById('taskInput');
    let taskText = textInput.value;
    
    addTaskToDOM(taskText)
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks))
    textInput.value = "";
}

function addTaskToDOM(taskText) {
    let ul = document.getElementById('taskList');
    console.log(ul)
    let li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <span>
            <span class="delete btn btn-danger" onclick="deleteTask(this)" >Delete</span>
            <span class="update btn btn-danger" onclick="updateTask()" >Update</span>
        </span>
       
    `
    ul.appendChild(li)
           
}

function deleteTask(element) {
    let li = element.parentElement.parentElement;
    let taskText = li.firstElementChild.innerText;

    li.remove()

    let tasks = JSON.parse(localStorage.getItem("tasks")) || []
    tasks = tasks.filter(task => task !== taskText)
    localStorage.setItem("tasks",JSON.stringify(tasks))

}

function updateTask() {
    
    let updateValue = prompt("Enter the updated To-Do item:");
    console.log(updateValue);
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []

    if (updateValue) { 
        tasks[0] = updateValue;
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
        document.getElementById("").firstElementChild.textContent = updateValue + " ";
    }

}
