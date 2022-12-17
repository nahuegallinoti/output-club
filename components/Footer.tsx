import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-flow-col justify-end items-center bg-black/10 text-white mt-10 mb-2 mx-5">
      <div className="text-xs text-white hover:scale-110 hover:cursor-pointer">
        <Link href="/" className="">
          <h1 className="font-bold">© 2022 Output.tv</h1>
        </Link>
      </div>
      {/* <div className="grid gap-1 xs:grid-flow-col justify-center text-sm font-semibold">
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-envelope mr-2"></i>Contacto
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-user-secret mr-2"></i>Políticas de privacidad
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-file-alt mr-2"></i>Términos y condiciones
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
