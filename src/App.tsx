import * as React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import RecentWork from './components/RecentWork';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <RecentWork />
        <Skills />
        <Recommendations />
        <Contact />
      </div>
    );
  }
}

export default App;
