'use client';

import { useState } from 'react';

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
      {/* for content */}
      <div className="py-1 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
        {aboutDataSkills[mainIndex].info.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="mb-[23px] xl:mb-[20px] flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center"
          >
            <div className="font-light xl:max-w-[440px] mb-[8px] text-main-green md:mb-0">
              {item.title}
            </div>
            {item.stage && <div>{item.stage}</div>}
            <div className="flex gap-x-[30px]">
              {item.icons?.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="text-3xl flex items-center gap-x-[10px]"
                >
                  {icon.iconThis}
                  <span className="text-sm">{icon.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
