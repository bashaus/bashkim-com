import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

import { useCarousel } from "../CarouselProvider/context";

type UsePrevNextButtonsType = {
  prevDisabled: boolean;
  nextDisabled: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const useCarouselButtons = (): UsePrevNextButtonsType => {
  const [, emblaApi] = useCarousel();

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(true);

  const onPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const onNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevDisabled(!emblaApi.canScrollPrev());
    setNextDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevDisabled,
    nextDisabled,
    onPrev,
    onNext,
  };
};
