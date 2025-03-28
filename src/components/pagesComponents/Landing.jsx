import React from 'react';
import { Socials } from '../navbar/w-allNavbar';

export default function Landing() {
  return (
    <main id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <section>
          <h6 className="uppercase text-sm tracking-widest text-gray-600">
            Zabeležite Vaše{' '}
            <span className="uppercase text-main-green">Najbitnije</span>{' '}
            Trenutke!
          </h6>
          <h1 className="py-4 text-gray-700">
            Snimamo kamerama visokih kvaliteta.
          </h1>
          <h2 className="py-2 text-gray-700">
            A za entuzijaste takođe
            <span className="text-main-green">
              {' '}
              snimamo i dronom iz vazduha.
            </span>
          </h2>
          <h3 className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Ako želite da zabeležite venčanje, krštenje, sportski događaj vašeg
            deteta, snimiti kuću iz vazduha radi prodaje ili poljoprivredno
            gazdinstvo zbog promocije, tu smo za vas.
          </h3>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Socials />
          </div>
        </section>
      </div>
    </main>
  );
}
