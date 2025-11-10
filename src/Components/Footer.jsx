import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { MdMail } from "react-icons/md";
import TicTacToe from "./TicTacToe";



export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[var(--primary-dark)] text-gray-300 relative border-t border-white/5">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-xl font-semibold inline-flex items-center gap-2">
            <span className="w-3 h-3 rounded-sm bg-[var(--primary-color)]"></span>
            nandakishore.dev
          </h2>

          <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-md">
            Design & Development crafted thoughtfully.  
            Building, improving, evolving.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-6 text-xl">
            <a href="#" className="hover:text-[var(--primary-color)] transition"><FaLinkedin /></a>
            <a href="#" className="hover:text-[var(--primary-color)] transition"><MdMail /></a>
            <a href="#" className="hover:text-[var(--primary-color)] transition"><RxTwitterLogo /></a>
            <a href="#" className="hover:text-[var(--primary-color)] transition"><FaInstagram /></a>
          </div>

        </div>

        {/* RIGHT SIDE (tic tac toe placeholder) */}
       <TicTacToe />

      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full border border-[var(--primary-color)] 
                   text-[var(--primary-color)] flex items-center justify-center text-lg 
                   hover:bg-[var(--primary-color)] hover:text-black transition"
      >
        ↑
      </button>

    </footer>
  );
}
