import { Fragment } from 'react';
import { tickerItems } from '../content';

export default function Ticker() {
  // The list is rendered twice so the CSS scroll animation loops seamlessly.
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {items.map((item, i) => (
          <Fragment key={i}>
            <span className="ticker-item">{item}</span>
            <span className="ticker-item ticker-dot">·</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
