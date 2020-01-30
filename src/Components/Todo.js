import React, { Component } from 'react';
import todoList from '../API/todolist.js';
import { Link } from 'react-router-dom';

class Todo extends Component{

    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }

    addTodo = event => {
        event.preventDefault(); // cancel le reaload de la page
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        })
    }

    renderTodos = () => {
        return todoList.map((item) => {
            return(
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.content}</td>
                </tr>
            )
        })
    }

    deleteTodo = (item) => {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    render(){
        return(
            <div>
                <h1 className="center">To do list</h1>
                <form className="form-row align-items-center col-md-6 pt-3">
                    <input
                    className="form-control mb-2 col-md-6"
                    value={this.state.userInput}
                    type="text"
                    placeholder="Action à faire..."
                    onChange={(event) => this.onChange(event)}
                    />
                    <button
                    onClick={(event) => this.addTodo(event)}
                    className="btn btn-primary mb-2 ml-2"
                    >Ajouter</button>
                </form>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Content</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTodos()}
                </tbody>
                </table>
                <br/>
                <Link to="/"><button className="btn btn-secondary">Go back Home</button></Link>
            </div>
        )
    }
}

export default Todo

