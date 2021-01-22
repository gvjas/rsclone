/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import * as React from 'react';
import '../styles/Widget.scss';

import TradingViewWidget from 'react-tradingview-widget';

// eslint-disable-next-line react/prefer-stateless-function
class Widget extends React.Component {
  render() {
    return (
      <div className="widget">
        <TradingViewWidget
          symbol="NASDAQ:AAPL"
          // theme={Themes.DARK}
          locale="fr"
          autosize
        />
      </div>
    );
  }
}

export default Widget;
