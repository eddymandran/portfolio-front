import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import ProjectDetails from './components/ProjectDetails';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Admin from './components/Admin';



function App() {
  return (
    <div className="page">
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/aboutme' component={AboutMe} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
