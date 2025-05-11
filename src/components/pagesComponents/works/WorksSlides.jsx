// icon
import { BsArrowRight } from 'react-icons/bs';

// data
import { workData } from '@/utils/data/workData';

// next image
import Image from 'next/image';

// links
import Link from 'next/link';

export default function WorksSlides() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {workData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300"
        >
          <Image
            src={item.path}
            alt={item.title}
            title={item.title}
            width={600}
            height={400}
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-main-green bg-opacity-60 text-white text-sm p-2">
            <span className="flex flex-row gap-2 justify-center items-center group-hover:scale-105 transition-transform duration-300">
              Pogledaj video <BsArrowRight />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
