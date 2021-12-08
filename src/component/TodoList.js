import React from "react"
import TodoItem from "./TodoItem"
class TodoList extends React.Component{
    render(){
        return(
            <ul>
           
            {this.props.todos.map(todo => (
/*              get Date from component using props */
             <TodoItem key={todo.id} 
              todo={todo} 
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
              />

            ))}
          </ul>
        )
    }
}
export default TodoList