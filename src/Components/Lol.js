import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Lol extends Component{

    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        
    }

    search(event){
        let value = event.target.value;
        let API_Key = "RGAPI-839efc24-b1f7-4c49-a16c-8c383d53432e";
        let url = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+value+"?api_key="+API_Key+"";
        fetch(url).then(res => res.json())
        .then((result => {
            console.log(result.id);
        }))
        .catch(error => {
            console.log(url);
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <h1>LoL API</h1><br/>
                <div className="form-group">
                    <input type="text" onChange={(event) => { this.search(event)}} placeholder="Summoner's name..." autoFocus></input>
                    <button className="btn btn-outline-primary ml-3">Search</button>
                </div>
                <Link to="/"><button className="btn btn-secondary">Go back Home</button></Link>
            </div>
        )
    }

}

export default Lol