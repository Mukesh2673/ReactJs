import React from "react";
import TodoList from './TodoList'
import InputTodo from './InputTodo'
import Header from "./Header"
class TodoContainer extends React.Component {
state = {
  todos: [
    {
      id: 1,
      title: "Setup development environment",
      completed: false
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ],
    currentid: 4,
    editing: false
  };
  setUpdate = (updatedTitle, id) => {
    let todos = this.state.todos.map(el => {
      if (el.id == id) {
        el.title = updatedTitle
        return el
      }
      else {
        return el
      }
    })
    this.setState({
      todos
    })
  }

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;

      }
      return todo;
    })

   });


 }
delTodo = id => {
this.setState({
todos:[
      ...this.state.todos.filter(todo=>{
        return todo.id!==id;
})
]



})
};

addTodoItem=title =>{
  const newTodo ={
    id:this.state.currentid,
    title:title,
    completed:false
  };
 
  this.setState({
 
    todos:[...this.state.todos,newTodo]
  });

this.setState({
currentid:this.state.currentid+1

})

};

  render() {
    return (
      <div className="container">
        <div className="inner">

      
        <Header/>
        <InputTodo addTodoProps={this.addTodoItem}/>
  <TodoList 
  todos={this.state.todos} 
  handleChangeProps={this.handleChange}
  deleteTodoProps={this.delTodo}
  setUpdate={this.setUpdate}/>




      </div>
      </div>
    );
  }
}
export default TodoContainer