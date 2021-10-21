import classNames from "classnames";
import SlickSlider, { Settings } from "react-slick";

import styles from "./styles.module.scss";
import dotsStyles from "./styles.dots.module.scss";

export type CarouselProps = Settings;

export const Carousel = ({
  adaptiveHeight = true,
  dots = true,
  dotsClass,
  infinite = false,
  draggable = true,
  lazyLoad = "ondemand",
  ...args
}: CarouselProps): JSX.Element => (
  <div className={styles.Carousel}>
    <SlickSlider
      adaptiveHeight={adaptiveHeight}
      dots={dots}
      dotsClass={classNames(dotsClass, dotsStyles.CarouselDots)}
      infinite={infinite}
      draggable={draggable}
      lazyLoad={lazyLoad}
      {...args}
    />
  </div>
);
