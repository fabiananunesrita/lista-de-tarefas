const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');


function createTodoItem(text) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <i class="bi bi-trash3-fill"></i>
        <i class="bi bi-star-fill"></i>
    `;
   
    todoList.appendChild(todoItem);


    // Checkbox
    const checkbox = todoItem.querySelector('input[type="checkbox"]');
    const textSpan = todoItem.querySelector('span');
    checkbox.addEventListener('change', function() {
        textSpan.classList.toggle('strikethrough', this.checked);
    });


    // Estrela
todoItem.querySelector('.bi-star-fill').addEventListener('click', function() {
    const firstItem = todoList.firstChild;
    if (firstItem === todoItem) {
        // Se já estiver no topo, remover a marcação goldenrod e retornar ao topo original
        todoItem.classList.remove('golden');
        todoList.appendChild(todoItem); // Move o item para o final da lista
    } else {
        // Move o item para o topo e marca como goldenrod
        todoList.prepend(todoItem);
        todoItem.classList.add('golden');
    }
});


    // Lixeira
    todoItem.querySelector('.bi-trash3-fill').addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });
}


// Adicionar nova tarefa
function addTodoItem() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        createTodoItem(todoText);
        todoInput.value = '';
    }
}


todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoItem();
    }
});


addButton.addEventListener('click', addTodoItem);


// Limpar lista de tarefas
clearButton.addEventListener('click', function() {
    todoList.innerHTML = '';
});


