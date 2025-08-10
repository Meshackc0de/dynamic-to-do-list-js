document.addEventListener('DOMContentLoaded',()=> {

  // Load tasks from localStorage when page opens
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(task => {
    const list = document.createElement('li');
    list.textContent = task;

    const removebtn = document.createElement('button');
    removebtn.textContent = 'Remove';
    removebtn.classList.add('remove-btn');

    removebtn.addEventListener('click', ()=> {
      list.remove();
      let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    list.appendChild(removebtn);
    document.getElementById('task-list').appendChild(list);
  });

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // addtask function
  const addTask = () => {
    let taskText = taskInput.value.trim();

    if(taskText !== ''){
      const list = document.createElement('li');
      list.textContent = taskText;

      const removebtn = document.createElement('button');
      removebtn.textContent = 'Remove';
      removebtn.classList.add('remove-btn');

      // set the remove function 
      removebtn.addEventListener('click', ()=> {
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

      // clear the input field
      taskInput.value = '';

    } else {
      alert('Please enter the task');
    }
  }

  // add task on button click
  addButton.addEventListener('click', addTask);
  
  // add task on Enter key press
  taskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      addTask()
    }
  })

})








