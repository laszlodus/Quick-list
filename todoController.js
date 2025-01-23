import TodoView from "./todoView.js";
import TodoModel from "./todoModel.js";

class TodoController {
    constructor() {
        this.model = new TodoModel();
        this.view = new TodoView('.container', 'inputField', '.button1');

        this.addNewTodo = this.addNewTodo.bind(this);
        this.handleTodo = this.handleTodo.bind(this);

        this.view.renderTodos(this.model.getTodos());
        this.view.addButton.addEventListener('click', this.addNewTodo);
        this.view.container.addEventListener('click', this.handleTodo);
    }
    
  
    addNewTodo() {
        const newTodo = this.view.getInputValue().trim();
        if(!newTodo) {
            alert('Please enter valid item!');
            return;
        };

        this.model.addTodo(newTodo);
        this.view.renderTodos(this.model.getTodos());
        this.view.clearInput();
    }

    handleTodo(e) {
        if (e.target.tagName === 'BUTTON') {
            const buttonIndex = parseInt(e.target.dataset.index);
            
            if (confirm('Do you want delete?')) {
                this.model.deleteTodo(buttonIndex);
                this.view.renderTodos(this.model.getTodos());
            };
        };

        if (e.target.tagName === 'INPUT') {
            const listitem = e.target.closest('.listitem');
            if (listitem) {
                const spanElement = listitem.querySelector('span');
                 if (spanElement) {
                 spanElement.classList.toggle('ready'); 
                } else {
                    console.error('No span found!')
                };
            }; 
         };
    };  
};
new TodoController();

  
