import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center text-2xl gap-5 text-white text-bold lg:mx-32 lg:my-24 mx-8 my-8 tracking-wide lg:tracking-widest">
      <div
        className="flex justify-between w-1/2
       items-center text-center my-20"
      >
        <a
          href="https://www.instagram.com/productioncompany/"
          className="text-xl text-rose-400 hover:text-violet-500 mb-5"
        >
          <FaInstagram size={50} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1234567890"
          className="text-xl text-red-600 hover:text-white mb-5"
        >
          <FaYoutube size={50} />
        </a>
        <a
          href="https://wa.me/341234567890"
          className="text-xl text-green-500 hover:text-green-800 mb-5"
        >
          <FaWhatsapp size={50} />
        </a>
        <a
          href="mailto:info@productioncompany.com"
          className="text-xl text-blue-500 hover:text-blue-800 mb-5"
        >
          <FaEnvelope size={50} />
        </a>
      </div>

      <p>
        If you have any questions or would like to get in touch with us, please
        don't hesitate to contact us using the following information:
      </p>
      <p>
        Location: Barcelona, Spain Phone: (123) 456-7890 Email:
        info@productioncompany.com We look forward to hearing from you!
      </p>
    </section>
  );
};

export default Contact;
