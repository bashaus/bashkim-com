import { UseEmblaCarouselType } from "embla-carousel-react";
import { createContext, useContext } from "react";

export type CarouselContextType = UseEmblaCarouselType | null;

export const CarouselContext = createContext<CarouselContextType>(null);
export const useCarousel = () => useContext(CarouselContext) ?? [];
