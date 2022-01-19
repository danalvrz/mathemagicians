import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="App">
        <section className="App-body">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Router>
        </section>
      </div>

    );
  }
}

export default App;
