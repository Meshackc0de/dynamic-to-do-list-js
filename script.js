
function loadTasks() {
  const taskList = document.getElementById('task-list');
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  storedTasks.forEach(task => {
    const list = document.createElement('li');
    list.textContent = task;

    const removebtn = document.createElement('button');
    removebtn.textContent = 'Remove';
    removebtn.classList.add('remove-btn');

    removebtn.addEventListener('click', () => {
      list.remove();
      let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    list.appendChild(removebtn);
    taskList.appendChild(list);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');

  // Load saved tasks
  loadTasks();

  // addtask function
  const addTask = () => {
    let taskText = taskInput.value.trim();

    if (taskText !== '') {
      const list = document.createElement('li');
      list.textContent = taskText;

      const removebtn = document.createElement('button');
      removebtn.textContent = 'Remove';
      removebtn.classList.add('remove-btn');

      removebtn.addEventListener('click', () => {
        list.remove();
        let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        tasks = tasks.filter(t => t !== taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      });

      list.appendChild(removebtn);
      taskList.appendChild(list);

      // save to localStorage
      const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      taskInput.value = '';
    } else {
      alert('Please enter the task');
    }
  };

  // add task on button click
  addButton.addEventListener('click', addTask);

  // add task on Enter key press
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});








