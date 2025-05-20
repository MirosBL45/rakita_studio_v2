// icons
import { BsArrowRight } from 'react-icons/bs';

import ContactText from './ContactText';

export default function Contact() {
  return (
    <div
      id="kontakt"
      className="max-w-[1240px] w-[97%] mx-auto md:h-screen p-2 flex items-center mt-50 md:mt-12"
    >
      <div className="flex flex-col">
        {/* text & form */}
        <div>
          {/* text */}
          <ContactText />
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
              <button className="bg-main-green text-white px-6 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-400 flex items-center gap-4 justify-center group">
                <span className="group-hover:text-amber-300 transition-all duration-300">
                  {/* {loading ? 'Šalje se...' : 'Pošalji'} */}
                  Dogovorimo detalje
                </span>
                <BsArrowRight
                  size={25}
                  className="group-hover:rotate-360 group-hover:text-amber-300 transition-all duration-300"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
