import React, {useEffect, useState, Suspense} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import { fetchPing } from './utils.js'
import NotFound from './components/NotFound';


function App(props) {

  const [language, updateLanguage] = useState(localStorage.getItem('i18nextLng'))
  const [pinged, updatePinged] = useState(false)


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
              <Suspense fallback={NotFound()}>
                <Route exact path="/menu">
                    <Menu handleLanguageChoice={handleLanguageChoice} />
                </Route>
              </Suspense>
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
