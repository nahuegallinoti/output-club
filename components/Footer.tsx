import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 bg-black/10 text-white mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Output.tv</h1>
            <p className="text-sm">Carrer de l'Argenterie, 58</p>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="underline hover:text-gray-400">
              Términos y condiciones
            </a>
            <a href="#" className="underline hover:text-gray-400">
              Políticas de privacidad
            </a>
            <a href="#" className="underline hover:text-gray-400">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
