import React from 'react';
import calculate from '../logic/calculate';

const bttnList = [
  { class: ['bttn', 'operator'], name: 'AC' },
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

function Calculator() {
  const [calcObj, setCalcObj] = React.useState('');

  function ClickHandler(buttonName) {
    setCalcObj(calculate(calcObj, buttonName.target.name));
  }

  function Bttn(props) {
    const buttonsArr = [];
    // eslint-disable-next-line react/prop-types
    props.arr.forEach((button) => buttonsArr.push(
      <button onClick={ClickHandler} type="button" name={button.name} key={button.name} className={[button.class[0], button.class[1]].join(' ')}>{button.name}</button>,
    ));
    return buttonsArr;
  }

  return (
    <div className="cowculator">
      <span
        className="cowculatorLegend"
        style={{ color: 'aliceblue' }}
      >
        Let&apos;s get crunchin&apos;!
        <br />
        moooooooooo!
      </span>
      <div className="calculatorCointainer">
        <div style={{ color: 'aliceblue' }} className="resultCointainer">
          <p className="result">
            {calcObj.total}
      &nbsp;
            {calcObj.operation}
      &nbsp;
            {calcObj.next}
          </p>
        </div>
        <div className="buttons">
          <Bttn arr={bttnList} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
