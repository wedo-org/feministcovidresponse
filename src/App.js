import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';

function App(props) {
  
  return (
    <div className="App">
        { props.location.pathname === "/menu" 
        ?
        <Switch>
                <Route exact path="/menu" component={Menu} />
        </Switch>
        :
        <>
        <NavBar />
        <MainContainer/>
        </>
        }
    </div>
  );
}

export default App;
