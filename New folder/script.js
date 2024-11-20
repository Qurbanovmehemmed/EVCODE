document.addEventListener("DOMContentLoaded", () => {
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const clearAllBtn = document.getElementById("clearAllBtn");

  let todos = []; 


  addTodoBtn.addEventListener("click", () => {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
          const newTodo = {
              text: todoText,
              done: false, 
              id: Date.now() 
          };
          todos.push(newTodo);
          todoInput.value = ""; 
          addTodoToList(newTodo); 
      } else{
          alert("Mətn daxil edin(")
      }
  });


  function toggleTodoStatus(id) {
      const todo = todos.find(t => t.id === id);
      if (todo) {
          todo.done = !todo.done; 
          const todoElement = document.getElementById(id);

          if (todo.done) {
             
              todoElement.classList.add('done');
              todoElement.classList.remove('undone');
          } else {
             
              todoElement.classList.remove('done');
              todoElement.classList.add('undone');
          }

          const todoText = todoElement.querySelector('.todoText');
          todoText.style.textDecoration = todo.done ? 'line-through' : 'none'; 
      }
  }

 
  function editTodo(id) {
      const todo = todos.find(t => t.id === id);
      if (todo) {
          const newText = prompt("Yeni mətni daxil edin:", todo.text);
          if (newText !== null && newText.trim() !== "") {
              todo.text = newText;
              const todoElement = document.getElementById(id);
              todoElement.querySelector('.todoText').textContent = newText;
          }
      }
  }

  
  function deleteTodo(id) {
      todos = todos.filter(todo => todo.id !== id); 
      const todoElement = document.getElementById(id);
      todoElement.remove();
  }

 
  clearAllBtn.addEventListener("click", () => {
      todos = [];
      todoList.innerHTML = ""; 
      
  });

 
  function addTodoToList(todo) {
      const li = document.createElement("li");
      li.classList.add(todo.done ? "done" : "undone");
      li.id = todo.id; 

      
      const number = document.createElement("span");
      number.textContent = `${todos.length}. `;
      li.appendChild(number);

      
      const todoText = document.createElement("span");
      todoText.classList.add("todoText");
      todoText.textContent = todo.text;
      li.appendChild(todoText);

     
      const doneBtn = document.createElement("button");
      doneBtn.textContent = "Tamamla";
      doneBtn.addEventListener("click", () => toggleTodoStatus(todo.id));
      li.appendChild(doneBtn);

    
      const editBtn = document.createElement("button");
      editBtn.textContent = "Redaktə et";
      editBtn.addEventListener("click", () => editTodo(todo.id));
      li.appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Sil";
      deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
      li.appendChild(deleteBtn);

      todoList.appendChild(li); 
  }
  
});
