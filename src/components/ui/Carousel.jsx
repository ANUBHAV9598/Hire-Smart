import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Search from "./Search";

const Carousel = ({ data }) => {
    return (
        <Swiper
            loop={true}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="relative w-screen h-screen"
        >
            {data.map((item) => (
                <SwiperSlide key={item.id}>
                    <div
                        className="flex items-center justify-center w-screen h-screen"
                        style={{
                            background: `url(${item.img})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="absolute top-[25%] left-[5%] md:left-[5%] lg:left-[5%] flex flex-col text-center md:text-left">
                            <h1 className="text-[7vw] md:text-[5vw] lg:text-[4vw] text-white font-bold leading-tight">
                                Find Skilled Workers for
                            </h1>
                            <h2 className="text-[7vw] md:text-[5vw] lg:text-[4vw] text-[#009963] font-bold ml-0 md:ml-[25%] lg:ml-[30%]">
                                Construction
                            </h2>
                            <div className="mt-4 md:mt-6 lg:mt-8">
                                <Search />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;