document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;
        
        document.getElementById('todoList').appendChild(li);
        
        taskInput.value = '';
        taskInput.focus();
    }
});

document.getElementById('todoList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.parentElement;
        li.remove();
    } else if (e.target.classList.contains('complete')) {
        const li = e.target.parentElement;
        li.classList.toggle('completed');
    }
});