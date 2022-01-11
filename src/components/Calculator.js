import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculatorCointainer">
        <div className="resultCointainer">
          <p className="result">0</p>
        </div>
        <div className="buttons">
          <div className="bttn">AC</div>
          <div className="bttn">+/-</div>
          <div className="bttn">%</div>
          <div className="bttn operator">÷</div>
          <div className="bttn">7</div>
          <div className="bttn">8</div>
          <div className="bttn">9</div>
          <div className="bttn operator">x</div>
          <div className="bttn">4</div>
          <div className="bttn">5</div>
          <div className="bttn">6</div>
          <div className="bttn operator">-</div>
          <div className="bttn">1</div>
          <div className="bttn">2</div>
          <div className="bttn">3</div>
          <div className="bttn operator">+</div>
          <div className="bttn zero">0</div>
          <div className="bttn">.</div>
          <div className="bttn operator">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
