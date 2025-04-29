import React from 'react';

export default function SkillDetails({ info }) {
  return (
    <div className="py-1 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
      {info.map((item, itemIndex) => (
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
  );
}
