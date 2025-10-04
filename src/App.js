import Home from './Pages/Home/Home';
import PortfolioNav from './Common/PortfolioNav';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';

class App extends Component {
  render() {
    return (
      <div>
        <PortfolioNav />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/experience" component={Experience} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
