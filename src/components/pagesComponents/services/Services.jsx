import { servicesDataText } from '@/utils/data/servicesData';
import ServiceSlider from './ServiceSlider';

export default function Services() {
  return (
    <div
      id="usluge"
      className="max-w-[1240px] w-[97%] p-2 mx-auto flex flex-col gap-x-8 mt-50 md:h-screen md:mt-12"
    >
      {/* text */}
      <div className="flex flex-col text-left mb-4 xl:mb-0">
        <h2 className="h2 xl:mt-8 mb-12">
          Naše
          <span className="text-main-green"> usluge</span>
        </h2>
        {servicesDataText.map((service) => (
          <p key={service.id} className="mb-6 mx-auto">
            {service.text}
          </p>
        ))}
      </div>
      {/* slider */}
      <div className="w-full">
        <ServiceSlider />
      </div>
    </div>
  );
}
