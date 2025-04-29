import { Numbers, Skills } from './../w-allPagesComponents';

export default function About() {
  return (
    <div
      id="o_nama"
      className="w-[97%] mx-auto md:h-screen p-2 flex items-center"
    >
      <div className="max-w-[1240px] m-auto flex flex-col justify-between items-center xl:flex-row xl:gap-36">
        <div className="flex-1 flex flex-col justify-center">
          <p className="uppercase text-xl tracking-widest text-main-green">
            Studio Rakita.
          </p>
          <h2 className="py-4">Svaki kadar ima priču.</h2>
          <p className="py-2 text-gray-600">
            Razvijali smo se kroz mnogo godina rada na različitim projektima,
            uživajući u svakom trenutku. Vi uživate jer dobijate prelepe kadrove
            omiljenih trenutaka, a za nas je radost baviti se onim što volimo.
            Ova inspiracija nas je podstakla da okupimo grupu ljudi koji sa
            žarom učestvuju u snimanju najupečatljivijih video zapisa sa vašeg
            događaja.
          </p>
          <Numbers />
        </div>
        <Skills />
      </div>
    </div>
  );
}
