/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import * as React from 'react';
import '../styles/Rate.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as _ from 'lodash';
import Calc from './Calc';
import Nav from './Nav';

// eslint-disable-next-line react/prefer-stateless-function
class Rate extends React.Component<any, any> {
  stock: string[];

  res: string[];

  result: any[];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
      date: '',
      stockRate: {},
      stockRate1: {},
      json0: '',
      json1: '',
      json2: '',
    };
    if (localStorage.getItem('store') !== 'undefined') {
      this.res = JSON.parse(localStorage.getItem('store'));
    } else {
      this.res = ['ABRD'];
    }
    this.result = [];
    this.stock = this.res;
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    this.getRate();
  }

  getRate = () => {
    try {
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=0').then((res) => res.json())
        .then((res) => this.setState({ json0: res.history.data }));
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=100').then((res) => res.json())
        .then((res) => this.setState({ json1: res.history.data }));
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=200').then((res) => res.json())
        .then((res) => {
          this.setState({ json2: res.history.data });
          const result1 = {};
          const result2 = {};
          this.result.map((item) => (
          // eslint-disable-next-line array-callback-return
            Object.values(item).map((element: any[]) => {
              // console.log(element);
              this.stock.forEach((el, k) => {
                if (element[3] === el) {
                  console.log(element);
                  // eslint-disable-next-line prefer-destructuring
                  result1[this.stock[k]] = element[11];
                  result2[this.stock[k]] = ` | Наименование: ${element[2]}
                  | Оборот: ${element[5]} | Изменение за день: ${((100 * (element[11] - element[6])) / element[11]).toFixed(2)}% | Цена закрытия: ${element[11]}`;
                }
              });
            })));

          setTimeout(() => {
            if (!_.isEmpty(result1)) {
              this.setState({ date: this.result[0][0][1] });
              this.setState({ stockRate: result1 });
              this.setState({ stockRate1: result2 });
            }
          }, 0);
        });
      // eslint-disable-next-line max-len
    } catch (e) {
      console.log(e.message);
    }
  };

  removeRate = (e) => {
    this.res = this.res.filter((item) => item !== e.target.dataset.name);
    // console.log(this.res);
    this.stock = this.res;
    localStorage.setItem('store', JSON.stringify(this.res));
    // eslint-disable-next-line react/destructuring-assignment
    return this.getRate();
  };

  render() {
    this.result.length = 0;
    this.result.push(Object.values(this.state.json0)
      .concat(Object.values(this.state.json1))
      .concat(Object.values(this.state.json2))
      .sort((a, b) => b[5] - a[5]));
    return (
      <div className="rate">
        <h3>
          Котировки акций ММВБ на
          {' '}
          {this.state.date}
        </h3>
        <div className="flex-container">
          {Object.keys(this.state.stockRate).map((keyName) => (
            <div className="block" key={keyName}>
              <div className="stock-name">{keyName}</div>
              <div className="stock-in">
                {this.state.stockRate1[keyName]}
                {' '}
                <input onClick={this.removeRate} type="submit" data-name={keyName} value="Удалить" />
              </div>
            </div>
          ))}
        </div>
        <Calc rate={this.state.stockRate} />
        <Nav res={this.res} result={this.result} getRate={this.getRate} />
      </div>

    );
  }
}

export default Rate;
