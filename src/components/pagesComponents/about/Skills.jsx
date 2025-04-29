'use client';

import { useState } from 'react';

import SkillDetails from './SkillDetails';

import { aboutDataSkills } from '@/utils/data/aboutData';

export default function Skills() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <div className="flex flex-col w-[97%] md:w-[70%] lg:max-w-[68%] xl:max-w-[48%] h-[480px] lg:justify-center">
      {/* for main title of about */}
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-6 mt-30 xl:mb-4 z-[32]">
        {aboutDataSkills.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`cursor-pointer capitalize xl:text-lg relative after:w-[100%] after:h-[2px] after:absolute after:-bottom-1 after:left-0 ${
              mainIndex === itemIndex &&
              'text-main-green after:w-[100%] after:transition-all after:duration-300 after:bg-main-green'
            }`}
            onClick={() => {
              setMainIndex(itemIndex);
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
      <SkillDetails info={aboutDataSkills[mainIndex].info} />
    </div>
  );
}
