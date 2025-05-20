// icons
import { BsArrowRight } from 'react-icons/bs';

export default function Contact() {
  return (
    <div
      id="kontakt"
      className="max-w-[1240px] w-[97%] mx-auto md:h-screen p-2 flex items-center md:mt-12"
    >
      <div className="flex flex-col">
        {/* text & form */}
        <div>
          {/* text */}
          <h2 className="h2 mb-12">
            {'Imate'} <span className="text-main-green">{'pitanje'}</span>,
            ideju ili plan? Tu smo da slušamo.
          </h2>
          <p className="mb-4 mx-auto lg:mx-0 text-left">
            Bez obzira da li organizujete svadbu, krštenje, sportski događaj,
            ili vam treba profesionalni snimak iz vazduha – javite nam se.
            Volimo da čujemo vaše ideje, predloge i želje, i trudimo se da svaku
            saradnju učinimo ličnom i jednostavnom.
          </p>
          <p className="mb-4 mx-auto lg:mx-0 text-left">
            Nema glupih pitanja – slobodno nas kontaktirajte i zajedno ćemo
            pronaći najbolje rešenje za vaš događaj. Odgovaramo brzo, konkretno
            i sa velikom pažnjom. Ako imate bilo kakve nedoumice ili želite
            saznati više o našim uslugama, slobodno nas kontaktirajte na telefon{' '}
            <a className="text-main-green" href="tel:+381631234567">
              063 123 4567
            </a>{' '}
            ili putem forme. Odgovorićemo vam u najkraćem mogućem roku.
          </p>
          {/* form */}
          <form
            // ref={formRef}
            // onSubmit={sendEmail}

            className="max-w-xl mx-auto p-4"
          >
            {/* input group */}
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Ime"
                  className="flex-1 p-2 border border-main-green rounded-md"
                  required
                />
                <input
                  name="user_email"
                  type="email"
                  placeholder="E-mail"
                  className="flex-1 p-2 border border-main-green rounded-md mt-4 md:mt-0"
                  required
                />
              </div>
              <textarea
                name="message"
                rows="5"
                className="w-full p-2 border border-main-green rounded-md textarea"
                placeholder="Vaša poruka"
                required
              ></textarea>
              <button className="bg-main-green text-white px-6 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-400">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  {/* {loading ? 'Šalje se...' : 'Pošalji'} */}
                  Dogovorimo detalje
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-500 absolute text-[32px] text-main-green" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
