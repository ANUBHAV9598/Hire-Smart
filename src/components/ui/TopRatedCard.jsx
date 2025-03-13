import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/navigation';

const TopRatedCard = ({ data }) => {
    const swiperRef = useRef(null);

    const handlePrevClick = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const handleNextClick = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    return (
        <div className="relative w-full">
            {/* Custom Navigation Buttons */}
            <button
                onClick={handlePrevClick}
                className="absolute z-10 p-1 bg-white rounded-full shadow-md -top-12 right-16 md:right-20"
            >
                <i className="text-2xl text-black md:text-3xl ri-arrow-left-s-line"></i>
            </button>

            <button
                onClick={handleNextClick}
                className="absolute z-10 p-1 bg-white rounded-full shadow-md right-2 -top-12 md:right-6"
            >
                <i className="text-2xl text-black md:text-3xl ri-arrow-right-s-line"></i>
            </button>

            {/* Swiper Component */}
            <Swiper
                spaceBetween={5}
                slidesPerView={1}  // Default for mobile
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 }
                }}
                className="w-full"
                onSwiper={(swiper) => (swiperRef.current = swiper)} // Save reference to Swiper instance
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative w-full max-w-[90vw] sm:max-w-[40vw] md:max-w-[30vw] lg:max-w-[18vw] h-[70vh] overflow-hidden rounded-md">
                            {/* Background Image */}
                            <div
                                className="w-full h-[25vh] relative overflow-hidden"
                                style={{
                                    background: `url('${item.img}')`,
                                    backgroundPosition: "top",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <button className="absolute px-3 py-1 text-xs font-semibold text-white bg-green-600 bottom-4 left-3 rounded-xl">
                                    {item.Availability}
                                </button>
                                <i className="absolute text-lg font-medium text-white ri-heart-line top-3 right-3"></i>
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col h-full gap-1 p-3 bg-white">
                                <h1 className="text-lg font-bold text-black">{item.name}</h1>
                                <h2 className="text-sm text-[#A1824A]">{item.title}</h2>

                                {/* Rating */}
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {Array.from({ length: item.rating }).map((_, index) => (
                                        <i key={index} className="ri-star-fill"></i>
                                    ))}
                                    <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                                    <span className="text-[#A1824A] font-medium text-xs">({item.reviews})</span>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {item.skills.map((skill, index) => (
                                        <button key={index} className="px-2 py-1 text-xs font-medium rounded bg-[#F5DEB3] text-[#009963]">
                                            {skill}
                                        </button>
                                    ))}
                                </div>

                                {/* Price */}
                                <h3 className="text-sm text-[#A1824A] mt-2">Hourly Rate</h3>
                                <h4 className="text-lg text-[#009963] font-bold">{item.price}</h4>

                                {/* Buttons */}
                                <div className="flex gap-2 mt-2">
                                    <button className="px-3 py-2 text-sm font-semibold text-green-600 border-2 border-green-600 rounded-md">
                                        View Profile
                                    </button>
                                    <button className="px-3 py-2 text-sm text-white bg-green-600 rounded-md">
                                        Hire Now
                                    </button>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-[2px] bg-gray-500 mt-2"></div>

                                {/* Extra Info */}
                                <div className="flex justify-between mt-1 text-xs text-black">
                                    <div className="flex items-center gap-1">
                                        <i className="ri-checkbox-circle-line text-md"></i>
                                        <span>Licensed & Insured</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <i className="ri-time-line text-md"></i>
                                        <span>{item.experience} years</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopRatedCard;
