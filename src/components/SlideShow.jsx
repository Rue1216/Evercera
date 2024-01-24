import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function SlideShow() {
  const slideItems = [
    { title: 'working-1', src: '/manufacture/working-1.jpg' },
    { title: 'working-2', src: '/manufacture/working-2.jpg' },
    { title: 'working-3', src: '/manufacture/working-3.jpg' },
    { title: 'working-4', src: '/manufacture/working-4.jpg' },
    { title: 'working-5', src: '/manufacture/working-5.jpg' },
    { title: 'working-6', src: '/manufacture/working-6.jpg' },
    { title: 'working-7', src: '/manufacture/working-7.jpg' }
  ]
  return (
    <Splide
      options={{
        type: 'fade',
        rewind: true,
        width: '100%',
        heightRatio: 0.625,
        gap: '0rem',
        direction: 'ltr',
        paginationDirection: 'ttb',
        wheel: true,
        releaseWheel: true,
        wheelMinThreshold: 50,
        arrows: false,
        autoplay: true,
        waitForTransition: true
      }}
      aria-label="瓷瓶的製作相片"
    >
      {slideItems.map((item, index) => (
        <SplideSlide key={index}>
          <img src={item.src} alt={item.title} />
        </SplideSlide>
      ))}
    </Splide>
  )
}
