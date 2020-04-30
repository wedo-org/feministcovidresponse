import React, {useEffect, useState, Suspense} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import { fetchPing } from './utils.js'
import NotFound from './components/NotFound';


function App(props) {

  const [language, updateLanguage] = useState('es')  
  const [pinged, updatePinged] = useState(false)

  console.log("pinged", pinged);
  
  useEffect( () => {
    pingHeroku()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pingHeroku = async () => {
    
    if (!pinged){
      await fetchPing()
      updatePinged(true)
    }
  }
  
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