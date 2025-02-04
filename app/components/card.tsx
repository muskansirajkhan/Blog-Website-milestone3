'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const SwipeableCards = () => {
  const cards = [
    {
      id: 1,
      title: "Programming Tips",
      description: "Dive into the world of programming.",
      image: "https://cdn.educba.com/academy/wp-content/uploads/2019/06/What-is-a-Programming-Language.jpg"
    },
    // Add more cards if needed
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="relative w-full h-64">
              <Image 
                src={card.image} 
                alt={card.title} 
                fill 
                style={{ objectFit: "cover" }} 
                className="rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{card.title}</h2>
            <p className="text-gray-600">{card.description}</p>
            <Link href="#" className="text-blue-500 hover:underline mt-2 block">
              Read More
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipeableCards;

