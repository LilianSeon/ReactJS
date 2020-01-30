import React, { Component} from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Todo from './Components/Todo';
import Home from './Components/Home';
import Lol from './Components/Lol';

class App extends Component  {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home name="Lilian" />} />
          <Route exact path="/todo" component={() => <Todo/>}/>
          <Route exact path="/lol" component={() => <Lol/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
