import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-flow-col justify-between items-center bg-black/10 text-white mt-10 mb-2 mx-5">
      <div className="w-fit text-xs bg-white text-black rounded-full p-2">
        <h1 className="font-extrabold">Output.tv</h1>
        <p className="font-bold">Barcelona</p>
      </div>
      <div className="grid gap-1 xs:grid-flow-col justify-center text-sm font-semibold">
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-envelope mr-2"></i>Contacto
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-user-secret mr-2"></i>Políticas de privacidad
        </a>
        <a href="#" className="hover:text-gray-400">
          <i className="fas fa-file-alt mr-2"></i>Términos y condiciones
        </a>
      </div>
    </footer>
  );
};

export default Footer;
