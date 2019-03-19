import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import styles from './styles.scss';

export default class Carousel extends React.PureComponent {
  render() {
    const {
      children,
      responsive,
      slidesToShow,
      slidestoScroll,
    } = this.props;

    return (
      <div className={styles.Carousel}>
        <SlickSlider
          adaptiveHeight
          centerMode
          dots
          dotsClass={styles.CarouselDots}
          draggable
          lazyLoad
          responsive={responsive}
          slidesToShow={slidesToShow}
          slidesToScroll={slidestoScroll}
        >
          { children }
        </SlickSlider>
      </div>
    );
  }
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  responsive: PropTypes.object,
  slidesToShow: PropTypes.number,
  slidestoScroll: PropTypes.number,
};

Carousel.defaultProps = {
  responsive: undefined,
  slidesToShow: 1,
  slidestoScroll: 1,
};
