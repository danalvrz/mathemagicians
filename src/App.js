import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
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
      <Router>
        <div className="App">
          <section className="App-body">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
