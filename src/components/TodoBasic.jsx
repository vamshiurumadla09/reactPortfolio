import React, { Component } from 'react';
import '../styles/todoBasic.css';

class TodoBasic extends Component {
    constructor(){
        super();
        this.state = {
            todos : ['react', 'javascript', 'html', 'css']
        }
    }

    addtodo = ()=>{
        var newTodo = document.getElementById('addTodo').value;
        if(newTodo){
            this.setState({todos:[...this.state.todos, newTodo]})
        }else{
            alert('give value')
        }
    }

    deleteTodo = (i)=>{
        var newTodos = this.state.todos
        newTodos.splice(i, 1);
        this.setState({todos:[...newTodos]})
    }

    deleteAll =()=>{
        this.setState({todos:[]})
    }
    render (){
        return (
            <div>
                <h1>hello todo list</h1>
                <div className="add-todo">
                    <input id="addTodo" className="input-todo" type="text"/>
                    <button onClick={this.addtodo} className="add-btn">Add</button>
                    <button onClick={this.deleteAll} className="delete-all-btn">delete all</button>
                </div>
                <ul className="ul">
                    {this.state.todos.map((todo, index)=>{
                        return <li className="li">{todo}
                            <button onClick={()=>{this.deleteTodo(index)}} className="delete-btn">delete</button>
                            </li>
                })}
                </ul>
            </div>
        )
    }

}  

export default TodoBasic;
