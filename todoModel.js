export default class TodoModel {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    };
    getTodos() {
        return this.todos;
    };
    addTodo(newTodo) {
        this.todos.push(newTodo);
        this.addStorage();
    };
    addStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    };
    deleteTodo(index) {
        this.todos.splice(index, 1);
                this.addStorage();
    };
};