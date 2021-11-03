import './App.css';
import Navbar from './Components/Navbar';
import Audioplayer from './Components/Audioplayer';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import Mashups from './Views/Mashups';
import Sign_in from './Views/SignInSide';
import Sign_out from './Views/Sign_out';
import Create_account from './Views/Create_account';

function App() {
  return (
    <div className="App">
      <Navbar />
        
          <Switch>
            <Route exact path = '/' render={()=> <Home />} />
            <Route exact path = '/Mashups' render={()=> <Mashups />} />
            <Route exact path = '/Signin' render={()=> <Sign_in />} />
            <Route exact path = '/Signout' render={()=> <Sign_out />} />
            <Route exact path = '/Createaccount' render={()=> <Create_account />} />
          </Switch>
          
          <Audioplayer />
        
    </div>
  );
}

export default App;
