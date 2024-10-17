// import swiper react component 
import {Swiper , SwiperSlide} from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from 'react-icons/rx';

// service data
const serviceData = [ 
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I transform your ideas into seamless,engaging user experiences.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creative, modern, intuitive design for an optimal UX.',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Strong, memorable brand identity, tailored to your vision.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Persuasive writing to maximize impact and customer engagement.',
  },
  // {
  //   icon: <RxRocket />,
  //   title: 'SEO',
  //   description: 'Complete SEO:visibility, performance, content , measurable results.',
  // },
];

// import required modules
import {FreeMode , Pagination} from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
     breakpoints={{ 
       320:{
         slidesPerView: 1,
         spaceBetween: 15,
       },
       640:{
          slidesPerView: 3,
          spaceBetween: 15
       },

      }}
      freeMode={true}
      pagination = {{ 
        clickable: true
       }}
       modules={[FreeMode , Pagination]}
       className='h-[240px] sm:h-[340px]'
     >
       {serviceData.map((item , index)=>{
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8
                flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
                 transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350px] leading-normal'>{item.description}</p>
              </div>
              {/* arraw */}
              <div className='text-3xl '>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
       })}
    </Swiper>
  );
};

export default ServiceSlider;
