import { Image, Heading, Text} from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';

interface Slide { 
  src: string,
  title: string,
  subtitle: string
}

interface SliderProps {
  slides: Slide[]
}

export function Slider({ slides }: SliderProps): JSX.Element  {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides && slides.map(slide =>(
        <SwiperSlide key={slide.title}>
          <Image src={slide.src} alt={slide.title} />
          <Heading as="h3"> 
            {slide.title}
          </Heading>
          <Text>{slide.subtitle}</Text>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};