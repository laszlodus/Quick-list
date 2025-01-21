
class QuickList {
    constructor() {
        this.addButton = document.querySelector('.button1');
        this.inputField = document.getElementById('item');
        this.container = document.querySelector('.container');
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
        
        // Event listeners
        this.renderTodos = this.renderTodos.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.handleTodo = this.handleTodo.bind(this);

        document.addEventListener('DOMContentLoaded', this.renderTodos);
        this.addButton.addEventListener('click', this.addNewTodo);
        this.container.addEventListener('click', this.handleTodo);
    }
   
    renderTodos() {
        this.container.innerHTML = '';
        if (this.todos.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'Your list is empty!';
            this.container.appendChild(message);
        };
        this.todos.forEach((element, index) => {
            const html = `
        <div class="listitem">
            <input type="checkbox" name="${index}">
            <span>${element}</span>
            <button data-index="${index}">Delete</button>
            </div>
        `;
            this.container.insertAdjacentHTML('beforeend', html);
        });
    };
    addStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };

    addNewTodo() {
        const newTodo = this.inputField.value.trim();
        if (!newTodo) {
            alert('Please enter a valid item!');
            return;
        }
        this.todos.push(newTodo);
        this.addStorage();
        this.renderTodos();
        this.inputField.value = '';
    };



    handleTodo(e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonIndex = parseInt(e.target.dataset.index);
            console.log(buttonIndex)
            if (confirm('Do you want delete?')) {
                this.todos.splice(buttonIndex, 1);
                this.addStorage();
                this.renderTodos();
            };
        };
        if (e.target.tagName === 'INPUT') {
            const listitem = e.target.closest('.listitem');
            const spanElement = listitem.querySelector('span');
            
            if (spanElement) {
               spanElement.classList.toggle('ready'); 
            } else {
                console.error('No span found!')
            }
         };
    };
};
new QuickList();
