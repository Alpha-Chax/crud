import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom" 
import Home from './Components/Home';

function App() {
  return (
   <>
   <Router>
   <Switch>
   <Route exact path="/signup">
    <Signup/>
    </Route>
    <div>
    <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
    </div>
   </Switch>
   </Router>
   </>
  );
}

export default App;
