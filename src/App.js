import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import { fetchPing } from './utils.js'


function App(props) {

  const [pinged, updatePinged] = useState(false)

  console.log("pinged", pinged);
  
  useEffect( () => {
    pingHeroku()
  }, [])

  const pingHeroku = async () => {
    
    if (!pinged){
      await fetchPing()
      updatePinged(true)
    }
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
          <NavBar />
          <MainContainer/>
        </section>
        }
    </div>
  );
}

export default App;