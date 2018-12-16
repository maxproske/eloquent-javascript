let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  if(todoList.length == 0) {
      return "-- No tasks left! --";
  }
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("do something");
console.log(getTask());
console.log(getTask());
console.log(getTask());

remember("do something");
// Make an item a priority
rememberUrgently("do something more important");
console.log(getTask());
console.log(getTask());
console.log(getTask());