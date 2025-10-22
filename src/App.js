import './App.css';
import Home from './Pages/Home/Home';
import PortfolioNav from './Common/PortfolioNav';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Experience from './Pages/Experience/Experience';
import { TopBar } from './Common/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar title={"Kasaxena5"} />
        <div className='App'>
          <PortfolioNav />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/experience" component={Experience} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
