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

const { createChart, CrosshairMode } = require('lightweight-charts');

// eslint-disable-next-line react/prefer-stateless-function
class Rate extends React.Component<any, any> {
  stock: string[];

  res: string[];

  result: any[];

  constructor(props: any) {
    super(props);
    this.state = {
      date: '',
      stockRate: {},
      stockRate1: {},
      json0: '',
      json1: '',
      json2: '',
      jsonGrath: '',
    };
    if (Array.isArray(JSON.parse(localStorage.getItem('store')))) {
      this.res = JSON.parse(localStorage.getItem('store'));
    } else {
      this.res = ['ABRD'];
    }
    this.result = [];
    this.stock = this.res;
    this.getRate();
  }

  getRate = () => {
    try {
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=0').then((res1) => res1.json())
        .then((res1) => this.setState({ json0: res1.history.data }));
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=100').then((res1) => res1.json())
        .then((res1) => this.setState({ json1: res1.history.data }));
      fetch('https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?start=200').then((res1) => res1.json())
        .then((res1) => {
          this.setState({ json2: res1.history.data });
          const result1 = {};
          const result2 = {};
          setTimeout(() => {
            this.result.map((item) => (
            // eslint-disable-next-line array-callback-return
              Object.values(item).map((element: any[]) => {
                // console.log(element);
                this.stock.forEach((el, k) => {
                  if (element[3] === el) {
                    // eslint-disable-next-line prefer-destructuring
                    result1[this.stock[k]] = element[11];
                    result2[this.stock[k]] = ` | Наименование: ${element[2]}
                    | Оборот: ${element[5]} | Изменение за день: ${((100 * (element[11] - element[6])) / element[11]).toFixed(2)}% | Цена закрытия: ${element[11]}`;
                  }
                });
              })));
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

  setGrath = (e) => {
    const data = this.state.date;
    function addDays(date, days) {
      const dateInMs = date.setDate(date.getDate() - days);
      return new Date(dateInMs);
    }
    const parseAddData = addDays(new Date(data), 300);
    const yyyy = parseAddData.getFullYear();
    const mm = parseAddData.getMonth();
    const dd = parseAddData.getDate();
    const prevData = `${yyyy}-${mm}-${dd}`;
    const grath = document.querySelector('.grath');
    grath.innerHTML = '';
    const chart = createChart(grath, {
      // width: 600,
      // height: 300,
      layout: {
        backgroundColor: '#003',
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.5)',
        },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      rightPriceScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
      timeScale: {
        borderColor: 'rgba(197, 203, 206, 0.8)',
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      // title: e.target.dataset.code,
      // upColor: 'rgba(255, 144, 0, 1)',
      // downColor: '#000',
      // borderDownColor: 'rgba(255, 144, 0, 1)',
      // borderUpColor: 'rgba(255, 144, 0, 1)',
      // wickDownColor: 'rgba(255, 144, 0, 1)',
      // wickUpColor: 'rgba(255, 144, 0, 1)',
    });

    chart.applyOptions({
      watermark: {
        color: 'rgba(255, 144, 0, 1)',
        visible: true,
        text: e.target.dataset.code,
        fontSize: 24,
        horzAlign: 'center',
        vertAlign: 'top',
      },
    });
    fetch(`https://iss.moex.com/iss/engines/stock/markets/shares/securities/${e.target.dataset.code}/candles.json?from=${prevData}&till=${data}&interval=24`)
      .then((resl) => resl.json())
      .then((resl) => {
        this.setState({ jsonGrath: resl.candles.data });
        const arrCandles = [];
        this.state.jsonGrath.forEach((item) => {
          arrCandles.push({
            time: item[6].split(' ')[0], open: item[0], high: item[2], low: item[3], close: item[1],
          });
        });
        candleSeries.setData(
          arrCandles,
        );
      });
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
                <input onClick={this.setGrath} type="submit" data-code={keyName} value="График" />
              </div>
            </div>
          ))}
        </div>
        <Calc rate={this.state.stockRate} />
        <Nav res={this.res} result={this.result} getRate={this.getRate} setGrath={this.setGrath} />
        {/* <div className="grath" /> */}
      </div>

    );
  }
}

export default Rate;
