/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable max-len */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
// import * as _ from 'lodash';
import * as React from 'react';
import '../styles/Nav.scss';
// import { createChart, CrosshairMode } from 'lightweight-charts';
const { createChart, CrosshairMode } = require('lightweight-charts');

// eslint-disable-next-line react/prefer-stateless-function
class Nav extends React.Component<any, any> {
  currency: string[];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      jsonGrath: '',
    };
  }

  setRate = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.res.push(e.target.dataset.x);
    this.props.getRate();
    localStorage.setItem('store', JSON.stringify(this.props.res));
    return this.props.res;
  };

  // setGrath = (e) => {
  //   let data = this.props.date;
  //   function addDays(date, days) {
  //     let dateInMs = date.setDate(date.getDate() - days);
  //     return new Date(dateInMs);
  //   }
  //   let parseAddData = addDays(new Date(data), 300);
  //   let yyyy = parseAddData.getFullYear();
  //   let mm = parseAddData.getMonth();
  //   let dd = parseAddData.getDate();
  //   let prevData = `${yyyy}-${mm}-${dd}`;
  //   let grath = document.querySelector('.grath');
  //   grath.innerHTML = '';
  //   const chart = createChart(grath, {
  //     width: 600,
  //     height: 300,
  //     layout: {
  //       backgroundColor: '#000000',
  //       textColor: 'rgba(255, 255, 255, 0.9)',
  //     },
  //     grid: {
  //       vertLines: {
  //         color: 'rgba(197, 203, 206, 0.5)',
  //       },
  //       horzLines: {
  //         color: 'rgba(197, 203, 206, 0.5)',
  //       },
  //     },
  //     crosshair: {
  //       mode: CrosshairMode.Normal,
  //     },
  //     rightPriceScale: {
  //       borderColor: 'rgba(197, 203, 206, 0.8)',
  //     },
  //     timeScale: {
  //       borderColor: 'rgba(197, 203, 206, 0.8)',
  //     },
  //   });

  //   const candleSeries = chart.addCandlestickSeries({
  //     // title: e.target.dataset.code,
  //     upColor: 'rgba(255, 144, 0, 1)',
  //     downColor: '#000',
  //     borderDownColor: 'rgba(255, 144, 0, 1)',
  //     borderUpColor: 'rgba(255, 144, 0, 1)',
  //     wickDownColor: 'rgba(255, 144, 0, 1)',
  //     wickUpColor: 'rgba(255, 144, 0, 1)',
  //   });

  //   chart.applyOptions({
  //     watermark: {
  //       color: 'rgba(255, 144, 0, 1)',
  //       visible: true,
  //       text: e.target.dataset.code,
  //       fontSize: 24,
  //       horzAlign: 'center',
  //       vertAlign: 'top',
  //     },
  //   });
  //   fetch(`https://iss.moex.com/iss/engines/stock/markets/shares/securities/${e.target.dataset.code}/candles.json?from=${prevData}&till=${data}&interval=24`)
  //     .then((resl) => resl.json())
  //     .then((resl) => {
  //       this.setState({ jsonGrath: resl.candles.data });
  //       const arrCandles = [];
  //       this.state.jsonGrath.forEach((item) => {
  //         arrCandles.push({
  //           time: item[6].split(' ')[0], open: item[0], high: item[2], low: item[3], close: item[1],
  //         });
  //       });
  //       candleSeries.setData(
  //         arrCandles,
  //       );
  //     });
  // };

  calcRate = (e) => {
    e.preventDefault();
    const { elements } = e.target;
  };

  render() {
    function countriesTable() {
      // Declare variables
      let input; let filter; let ul; let li; let a; let i;
      // eslint-disable-next-line prefer-const
      input = document.querySelector('[data-search=mySearch]');
      filter = input.value.toUpperCase();
      ul = document.getElementById('myMenu');
      li = ul.getElementsByTagName('li');
      try {
      // eslint-disable-next-line no-plusplus
        for (i = 0; i < li.length; i++) {
          // eslint-disable-next-line prefer-destructuring
          a = li[i].getElementsByTagName('a')[0];
          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
          } else {
            li[i].style.display = 'none';
          }
        }
      } catch (e) {
        //
      }
    }
    return (
      <div className="selectStock">
        <div className="listCountries" onKeyUp={countriesTable}>
          <textarea
            className="use-keyboard-input"
            // type="text"
            id="focus"
            data-search="mySearch"
            placeholder="Search.."
            title="Type in a category"
          />
          <form onSubmit={this.calcRate} action="">
            <ul id="myMenu">
              {this.props.result.map((item, i) => (
                Object.values(item).map((element, j) => (
                  <li key={element[3].toString()}>
                    <a>
                      {(i * 100) + j + 1}
                      {' | Код: '}
                      {element[3]}
                      {' | Наименование: '}
                      {element[2]}
                      {' | Оборот: '}
                      {element[5]}
                      {' | Изменение за день: '}
                      {((100 * (element[11] - element[6])) / element[11]).toFixed(2)}
                      {'% | Цена закрытия: '}
                      {element[11]}
                    </a>
                    <input type="submit" onClick={this.setRate} name="count" data-x={element[3]} value="Добавить" />
                    <input type="submit" onClick={this.props.setGrath} name="count" data-code={element[3]} value="График" />
                  </li>
                ))))}
            </ul>
          </form>
        </div>
        <div className="grath" />
      </div>
    );
  }
}

export default Nav;
