const DELAY = 2000;
const todos = [
  { isDone: false, title: 'Hello Todos' },
  { isDone: false, title: 'More Todos' },
  { isDone: false, title: 'even more Toodos' },
  { isDone: true, title: 'create Todo App' },
];

const waitForIt = async it =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(it);
    }, DELAY);
  });

export const TodoService = {
  getTodoList: () => waitForIt(todos),
  addTodoItem: item => {
    todos.push(item);
  },
  filterBy: filter =>
    // TODO: todos.filter(todo => filter === 'isDone' ? todo.isDone : !todo.isDone)
    filter === 'all' ? todos : todos.filter(todo => todo[filter]),
  // eslint-disable-next-line no-unused-vars
  markAsDone: (title, done) => {
    const idx = todos.findIndex(it => it.title === title);
    // TODO: change isDone parameter assignment with the done value
    todos[idx] = { ...todos[idx], isDone: true };
  },
};
