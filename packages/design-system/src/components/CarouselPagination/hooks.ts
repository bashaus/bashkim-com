import { EmblaCarouselType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

import { useCarousel } from "../CarouselProvider/context";

type UseCarouselPaginationType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onChange: (index: number) => void;
};

export const useCarouselPagination = (): UseCarouselPaginationType => {
  const [, emblaApi] = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onChange = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onChange,
  };
};
