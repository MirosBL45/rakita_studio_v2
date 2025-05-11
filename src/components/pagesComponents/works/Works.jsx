import WorksSlides from './WorksSlides';

export default function Works() {
  return (
    <div
      id="radovi"
      className="max-w-[1240px] w-[97%] mx-auto md:h-screen p-2 flex items-center md:mt-12"
    >
      <div className="flex flex-col">
        <div className="text-center flex flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="xl:mt-12 mb-7">
            Naši <span className="text-main-green">radovi</span>
          </h2>
          <p className="mx-auto lg:mx-0 mb-6">
            Pogledajte svet kroz naše objektive - doživite emocije i priče koje
            smo uhvatili u svakom kadru. Naš portfolio je svedočanstvo naše
            posvećenosti kvalitetu i strasti prema vizuelnom izražavanju, jer za
            nas svaki rad predstavlja jedinstveno iskustvo.
          </p>
        </div>
        <div className="w-full">
          <WorksSlides />
        </div>
      </div>
    </div>
  );
}
