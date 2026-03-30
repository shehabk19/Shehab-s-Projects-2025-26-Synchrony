// CONSTANT
const maxTasks = 10;

// ARRAY
let tasks = [];

// TIMER
let timer;
let seconds = 0;

// ONLOAD EVENT
function welcomeMessage() {
    alert("Welcome to GradGuru Task Manager!");
    startTimer();
}

// FUNCTION (MULTIPLE PARAMETERS + RETURN)
function createTask(name, priority) {
    return {
        name: name,
        priority: priority
    };
}

// ONCLICK EVENT
function addTask() {
    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority").value;

    if (tasks.length >= maxTasks) {
        alert("Max tasks reached!");
        return;
    }

    let newTask = createTask(input.value, priority);
    tasks.push(newTask);

    input.value = "";
    displayTasks();
}

// LOOP + DOM MANIPULATION
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");

        li.innerText = tasks[i].name;

        // ELSE IF LOGIC
        if (tasks[i].priority === "high") {
            li.className = "high";
        } else if (tasks[i].priority === "medium") {
            li.className = "medium";
        } else {
            li.className = "low";
        }

        // ONMOUSEOVER EVENT
        li.onmouseover = function () {
            li.style.fontSize = "20px";
        };

        li.onclick = function () {
            tasks.splice(i, 1);
            displayTasks();
        };

        list.appendChild(li);
    }
}

// SETINTERVAL + CLEARINTERVAL
function startTimer() {
    timer = setInterval(function () {
        seconds++;
        document.getElementById("timerText").innerText =
            "Time on task: " + seconds + " seconds";

        if (seconds >= 30) {
            clearInterval(timer);
        }
    }, 1000);
}