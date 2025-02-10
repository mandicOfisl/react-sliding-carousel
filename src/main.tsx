import React from 'react';
import { Carousel } from './index';
import { createRoot } from 'react-dom/client';

const DemoCarousel = () => {
  return (
    <Carousel
      showArrows
      autoPlay
      centerMode={true}
      centerSlidePercentage={33.333}
      useKeyboardArrows={true}
      containerTabIndex={-1}
      selectionFollowsSwipe={true}
      emulateTouch
      onClickItem={(...args) => console.log('onClickItem', ...args)}
      onChange={(...args) => console.log('onChange', ...args)}
      onClickThumb={(...args) => console.log('onClickThumb', ...args)}
    >
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="assets/4.jpeg" />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src="assets/5.jpeg" />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src="assets/6.jpeg" />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};

const container = document.querySelector('.demo-carousel');

if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(<DemoCarousel />);
