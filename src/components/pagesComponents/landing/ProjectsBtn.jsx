// next link
import Link from 'next/link';

function ProjectsBtn({ textOfButton }) {
  return (
    <div className="mx-auto xl:mx-0 z-30 my-5">
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#F13024] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          href="/#radovi"
          title={textOfButton}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-main-green font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          {textOfButton}
        </Link>
      </div>
    </div>
  );
}

export default ProjectsBtn;
