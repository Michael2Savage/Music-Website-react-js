import './App.css';
import Navbar from './Components/Navbar';
import Audioplayer from './Components/Audioplayer';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Mashups from './Views/Mashups';


function App() {
  return (
    <div className="App">
      <Navbar />
        
          <Switch>
            <Route exact path = '/' render={()=> <Home />} />
            <Route exact path = '/Mashups' render={()=> <Mashups />} />
          </Switch>
          
      <Audioplayer />
        
    </div>
  );
}

export default App;
