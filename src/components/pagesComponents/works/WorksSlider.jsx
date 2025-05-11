'use client';

// icon
import { BsArrowRight } from 'react-icons/bs';

// data
import { workData } from '@/utils/data/workData';

// next image
import Image from 'next/image';

// links
import Link from 'next/link';

// swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function WorksSlider() {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {workData.map((work, index) => (
          <SwiperSlide key={index}>
            <div className="group relative overflow-hidden rounded-lg shadow-md border border-gray-200">
              <Image
                src={work.path}
                alt={work.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold mb-2">{work.title}</h3>
                <Link
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  Pogledaj video <BsArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
