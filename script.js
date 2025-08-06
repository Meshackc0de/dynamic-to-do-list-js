document.addEventListener('DOMContentLoaded',()=> {


  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  //addtask function
  const addTask = () => {
    let taskText = taskInput.value.trim();

    if(taskText !== ''){
      const list = document.createElement('li');
      list.textContent = taskText;

      const removebtn = document.createElement('button');
      removebtn.textContent = 'Remove';
      removebtn.classList.add('remove-btn');

      //set the remove function 
      removebtn.addEventListener('click', ()=>{
        list.remove();
      });
      list.appendChild(removebtn);
      taskList.appendChild(list);

      // clear the input field
      taskInput.value = '';

    } else {
      alert('Please enter the task');
    }
  }
 //add task on button click
  addButton.addEventListener('click', addTask);
  
  // add task on Enter key pree
  taskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
      addTask()
    }
  })

  
})



