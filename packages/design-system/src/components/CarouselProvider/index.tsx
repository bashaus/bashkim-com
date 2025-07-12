import Box from "@mui/material/Box";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren } from "react";

import { CarouselContext } from "./context";

export type CarouselProviderProps = Readonly<
  PropsWithChildren<{
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    slidesVisible?: number;
  }>
>;

export default function CarouselProvider({
  children,
  options,
  plugins,
  slidesVisible = 1,
}: CarouselProviderProps) {
  const embla = useEmblaCarousel(options, plugins);

  return (
    <Box sx={{ "--slide-size": `${100 / slidesVisible}%` }}>
      <CarouselContext.Provider value={embla}>
        {children}
      </CarouselContext.Provider>
    </Box>
  );
}
