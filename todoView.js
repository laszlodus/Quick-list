export default class TodoView {
    constructor(containerSelector, inputSelector, buttonSelector) {
        this.addButton = document.querySelector(buttonSelector);
        this.inputField = document.getElementById(inputSelector);
        this.container = document.querySelector(containerSelector);
    }
    showMessage() {
        this.container.innerHTML = '';
        const message = document.createElement('p');
        message.textContent = 'Your list is empty!';
        this.container.appendChild(message);
    }
  
    getInputValue() {
        return this.inputField.value.trim();
    }
    clearInput() {
        this.inputField.value = '';
    }
    renderTodos(todos) {
        this.container.innerHTML = '';

        if (todos.length === 0) {
            this.showMessage();
            return;
        };

            todos.forEach((todo, index) => {
            const html = `
                <div class="listitem">
                <input type="checkbox" data-index="${index}">
                <span>${todo}</span>
                <button data-index="${index}">Delete</button>
            </div>
        `;
            this.container.insertAdjacentHTML('beforeend', html);
        });
    }
};