const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const containers = document.querySelectorAll('.tasks-container');

let draggedCard = null;

function attachDragEvents(card) {
    card.addEventListener('dragstart', () => {
        draggedCard = card;
        setTimeout(() => card.classList.add('dragging'), 0);
    });

    card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
        draggedCard = null;
    });
}

document.querySelectorAll('.task-card').forEach(attachDragEvents);

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        container.classList.add('drag-over');
    });

    container.addEventListener('dragleave', () => {
        container.classList.remove('drag-over');
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        container.classList.remove('drag-over');
        if (draggedCard) {
            container.appendChild(draggedCard);
        }
    });
});

function createNewTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const newCard = document.createElement('div');
    newCard.classList.add('task-card');
    newCard.setAttribute('draggable', 'true');
    newCard.textContent = taskText;

    attachDragEvents(newCard);
    
    document.querySelector('#todo .tasks-container').appendChild(newCard);
    taskInput.value = '';
}

addTaskBtn.addEventListener('click', createNewTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createNewTask();
    }
});
