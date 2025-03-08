// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/work9.jpg",
          link: "https://clothify-blush.vercel.app/",
        },
        {
          title: "title",
          path: "/work-7.jpg",
          link: "https://education-landing-page-reactjs.netlify.app",
        },
        {
          title: "title",
          path: "/work8.jpg",
          link: "https://moblessa-ai.netlify.app/",
        },
        {
          title: "title",
          path: "/work10.jpg",
          link: "https://landingpage-hobank.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/work1.jpg",
          link: "https://burger-burst.netlify.app/",
        },
        {
          title: "title",
          path: "/work4.jpg",
          link: "https://beatblitz-products.netlify.app/",
        },
        {
          title: "title",
          path: "/work2.jpg",
          link: "https://portfulio-templet.netlify.app",
        },
        {
          title: "title",
          path: "/work3.jpg",
          link: "https://doctore-landing-page.vercel.app/",
        },
      ],
    },
  ],
};

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2  gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg  overflow-hidden 
                      flex items-center justify-center group"
                    key={index}
                  >
                    <Link href={image.link} target="_blank">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent
                       via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 "
                        ></div>
                        {/* title */}
                        <div
                          className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                         group-hover:xl:-translate-y-20 transition-all duration-300"
                        >
                          <div
                            className="flex items-center gap-x-2 
                            text-[13px] tracking-[0.2em]"
                          >
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div
                              className="transition-y-[500%] group-hover:translate-y-0 
                            transition-all duration-300 delay-150"
                            >
                              PROJECT
                            </div>
                            {/* icon*/}
                            <div
                              className="text-xl translate-y-[500%] group-hover:translate-y-0
                             transition-all duration-300 delay-200"
                            >
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
