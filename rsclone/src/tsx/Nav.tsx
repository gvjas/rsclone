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
import * as React from 'react';
import '../styles/Nav.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Nav extends React.Component<any, any> {
  currency: string[];

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props) {
    super(props);
  }

  setRate = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.res.push(e.target.dataset.x);
    this.props.getRate();
    localStorage.setItem('store', JSON.stringify(this.props.res));
    return this.props.res;
  };

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
                    <input className="btnNav" type="submit" onClick={this.setRate} name="count" data-x={element[3]} value="В таблицу" />
                    <input className="btnNav" type="submit" onClick={this.props.setGrath} name="count" data-code={element[3]} value="График" />
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
