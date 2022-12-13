import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-black/10 text-white my-5 mx-10">
      <div>
        <h1 className="text-sm font-extrabold">Output.tv</h1>
        <p className="text-sm font-bold">Barcelona</p>
      </div>
      <div className="flex space-x-4 text-sm font-semibold">
        <a href="#" className="hover:text-gray-400">
          Términos y condiciones
        </a>
        <a href="#" className="hover:text-gray-400">
          Políticas de privacidad
        </a>
        <a href="#" className="hover:text-gray-400">
          Contacto
        </a>
      </div>
    </footer>
  );
};

export default Footer;
