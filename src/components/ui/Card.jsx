import React from "react";

const Card = ({ data }) => {
    return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:gap-3 md:gap-4">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="relative w-full h-[30vh] overflow-hidden border-2 rounded-md"
                    style={{
                        background: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <h1 className="absolute z-10 text-lg font-semibold text-white sm:text-xl left-3 sm:left-4 bottom-12 sm:bottom-14">
                        {item.title}
                    </h1>

                    <div className="absolute bottom-0 flex items-center justify-between w-full h-12 px-3 bg-white">
                        <h1 className="text-sm sm:text-md font-medium text-[#A1824A]">Starting from</h1>
                        <h2 className="text-md sm:text-lg font-bold text-[#009963]">{item.price}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
