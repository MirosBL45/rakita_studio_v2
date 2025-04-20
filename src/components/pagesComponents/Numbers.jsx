'use client';

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

import { numbersAbout } from '@/utils/data/aboutData';

export default function Numbers() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section ref={ref} className="flex flex-1 xl:gap-x-6 mt-8">
      {numbersAbout.map((item, index) => (
        <div
          key={index}
          className={`relative flex-1 ${
            index !== numbersAbout.length - 1
              ? 'after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'
              : ''
          }`}
        >
          <div className="text-2xl xl:text-4xl font-extrabold text-main-green mb-2">
            {startCount ? <CountUp end={item.value} duration={2} /> : '0'} +
          </div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
            {item.label}
          </div>
        </div>
      ))}
    </section>
  );
}
