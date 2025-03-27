import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import useCarousel from '@/hooks/useCarousel';
import React from 'react';
import PredictionHomeCards from '../market/PredictionHomeCards';
import { useTheme } from 'next-themes';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselDotButton, { DotButton } from './CarouselDotButton';

const PredictionCarousel = (props) => {
  const { setApi, plugin, current, count } = useCarousel();
  const { resolvedTheme: theme } = useTheme();
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = CarouselDotButton(emblaApi);
  console.log(scrollSnaps)
  return (
    <div className="relative mx-auto">
      <div className="absolute z-20 px-5 py-2 text-2xl font-semibold">
        <h1 className="text-sky-600">Prediction Home</h1>
      </div>
      <Carousel
        plugins={[plugin.current]}
        setApi={setApi}
        ref={emblaRef}
        className={`w-full border-2 ${theme === 'dark' ? 'border-gray-500' : ''}`}
      >
        <CarouselContent>
          {slides.map((name, index) => (
            <CarouselItem key={index}>
              <PredictionHomeCards name={name} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="text">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? 'embla__dot--selected' : '')}
            />
          ))}
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
};

export default PredictionCarousel;
