'use client';

// components
import ServiceCard from './ServiceCard';

// data
import { serviceData } from '@/utils/data/servicesData';

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, itemIndex) => (
        <SwiperSlide key={itemIndex}>
          <ServiceCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
