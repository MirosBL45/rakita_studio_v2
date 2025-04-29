import WorksSlider from './WorksSlider';

export default function Works() {
  return (
    <div
      id="radovi"
      className=" max-w-[1240px] w-[97%] mx-auto md:h-screen p-2 flex items-center"
    >
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <h2 className="h2 xl:mt-12">Naši radovi</h2>
          <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Pogledajte svet kroz naše objektive - doživite emocije i priče koje
            smo uhvatili u svakom kadru. Naš portfolio je svedočanstvo naše
            posvećenosti kvalitetu i strasti prema vizuelnom izražavanju, jer za
            nas svaki rad predstavlja jedinstveno iskustvo.
          </p>
        </div>
        <div className="w-full xl:max-w-[65%]">
          <WorksSlider />
        </div>
      </div>
    </div>
  );
}
