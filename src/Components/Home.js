import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }


    render(){
        return(
            
            <div>
                <h1 className="center">Welcome {this.props.name}</h1>
                <br/>
                <Link to="/todo">
                    <button className="btn btn-primary">Go to Todo list</button>
                </Link>
                <Link className="text-white ml-3" to="/lol">
                    <button className="btn btn-primary">LoL API</button>
                </Link>
            </div>
        )
    }
}

export default Home

