import { Heading, Text, Flex, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css'

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
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      navigation
    >
      {slides && slides.map(slide =>(
        <SwiperSlide key={slide.title}>
          <Box 
            height="450"
            backgroundImage={slide.src}
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
            backgroundSize="cover"
            position="relative"
          > 
            <Box 
              position="absolute" 
              top="50%" 
              left="50%" 
              transform="translate(-50%, -50%)"
              align="center"
              zIndex="2"
            > 
              <Heading as="h3" color="gray.100" fontSize="48px"> 
                {slide.title}
              </Heading>
              <Text color="gray.300" fontWeight="700" fontSize="24px">{slide.subtitle}</Text>
            </Box>

            <Box
              position="absolute"
              top= "0"
              right= "0"
              backgroundColor= "rgba(28, 20, 1, 0.35)"
              width= "100%"
              height= "100%"
              zIndex="1" 
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};