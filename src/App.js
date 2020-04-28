import React, {useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';

function App(props) {

  const [language, updateLanguage] = useState('EN')

  const handleLanguageChoice = (e) => {
    updateLanguage(e.target.id)
  }

  return (
    <div className="App">
        { props.location.pathname === "/menu"
        ?
        <Switch>
                <Route exact path="/menu" component={Menu} />
        </Switch>
        :
        <section className='navbar-maincontainer'>
          <NavBar handleLanguageChoice={handleLanguageChoice}/>
          <MainContainer/>
        </section>
        }

    </div>
  );
}

export default App;