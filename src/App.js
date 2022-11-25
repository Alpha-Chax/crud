import './App.css';
import Navbar from './Components/Navbar';
import Signup from './Pages/Signup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom" 
import Home from './Pages/Home';
import Header from './Components/Header';
import Students from './Pages/Students';
import Course from './Pages/Course';
import Pay from './Pages/Pay'
import Report from './Pages/Report';
import Settings from './Pages/Settings'
import Users from './Pages/Users'



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
    <Header/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/course">
      <Course/>
    </Route>
    <Route exact path="/students">
      <Students/>
    </Route>
    <Route exact path="/payment">
      <Pay/>
    </Route>
    <Route exact path="/report">
      <Report/>
    </Route>
    <Route exact path="/settings">
      <Settings/>
    </Route>
    <Route exact path="/users">
      <Users/>
    </Route>
    </div>
   </Switch>
   </Router>
   </>
  );
}

export default App;
