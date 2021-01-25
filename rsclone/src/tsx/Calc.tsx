/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import * as React from 'react';
// eslint-disable-next-line import/no-unresolved
import '../styles/Calc.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Calc extends React.Component<any, any> {
  stock: string[];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  static getDerivedStateFromProps(props) {
    return { rate: props.rate };
  }

  calcRate = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const countstock = elements['count-stock'].value;
    const typestock = elements['type-stock'].value;
    // eslint-disable-next-line react/no-access-state-in-setstate
    this.setState({ result: (countstock / this.state.rate[typestock]) });
  };

  render() {
    return (
      <div className="calculator">
        <h3>Калькулятор покупки, в рублях</h3>
        <div className="block">
          <form onSubmit={this.calcRate} action="">
            <input type="number" defaultValue="1000" name="count-stock" />
            <select name="type-stock" id="">
              {Object.keys(this.props.rate).map((keyName) => (
                <option key={keyName} value={keyName}>{keyName}</option>
              ))}
            </select>
            <input type="submit" value="Рассчитать" />
            <span className="calc-res">
              {' '}
              Результат: Количество акций
              {' '}
              {this.state.result.toFixed(3)}
            </span>
          </form>
        </div>
      </div>
    );
  }
}

export default Calc;
