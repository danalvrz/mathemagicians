/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import calculate from '../logic/calculate';

const bttnList = [
  { class: ['bttn'], name: 'AC' },
  { class: ['bttn'], name: '+/-' },
  { class: ['bttn'], name: '%' },
  { class: ['bttn', 'operator'], name: '÷' },
  { class: ['bttn'], name: '7' },
  { class: ['bttn'], name: '8' },
  { class: ['bttn'], name: '9' },
  { class: ['bttn', 'operator'], name: 'x' },
  { class: ['bttn'], name: '4' },
  { class: ['bttn'], name: '5' },
  { class: ['bttn'], name: '6' },
  { class: ['bttn', 'operator'], name: '-' },
  { class: ['bttn'], name: '1' },
  { class: ['bttn'], name: '2' },
  { class: ['bttn'], name: '3' },
  { class: ['bttn', 'operator'], name: '+' },
  { class: ['bttn', 'zero'], name: '0' },
  { class: ['bttn'], name: '.' },
  { class: ['bttn', 'operator'], name: '=' },
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Obj: {
        total: null,
        next: null,
        operation: null,
      },
    };
  }

  clickHandler = (buttonName) => {
    const updateDisplay = calculate(this.state.Obj, buttonName.target.name);
    this.setState({ Obj: updateDisplay });
  };

  Bttn = (props) => {
    const buttonsArr = [];
    props.arr.forEach((button) => buttonsArr.push(
      <button onClick={this.clickHandler} type="button" name={button.name} key={button.name} className={[button.class[0], button.class[1]].join(' ')}>{button.name}</button>,
    ));
    return buttonsArr;
  };

  render() {
    return (
      <div className="calculatorCointainer">
        <div className="resultCointainer">
          <p className="result">
            {this.state.Obj.total}
        &nbsp;
            {this.state.Obj.operation}
        &nbsp;
            {this.state.Obj.next}
          </p>
        </div>
        <div className="buttons">
          <this.Bttn arr={bttnList} />
        </div>
      </div>
    );
  }
}

export default Calculator;
