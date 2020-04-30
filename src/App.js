import React, {useState, Suspense} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import NotFound from './components/NotFound';

function App(props) {

  const [language, updateLanguage] = useState('es')  

  const handleLanguageChoice = (lg) => {    
    updateLanguage(lg)
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
          <Suspense fallback={NotFound()}>
            <NavBar handleLanguageChoice={handleLanguageChoice}/>
            <MainContainer language={language}/>
          </Suspense>
        </section>
        }

    </div>
  );
}

export default App;