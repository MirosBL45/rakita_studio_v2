// components
import { Socials } from './w-allNavbar';

export default function BottomMenu() {
  return (
    <div className="pt-[15vh]">
      <p className="uppercase tracking-widest text-main-green">
        Ostanimo u kontaktu
      </p>
      <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
        <Socials />
      </div>
    </div>
  );
}
