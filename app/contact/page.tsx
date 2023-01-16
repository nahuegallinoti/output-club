import React from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center text-2xl gap-5 text-white text-bold lg:mx-72 lg:my-24 mx-auto my-8 tracking-wide xs:mx-8">
      <div
        className="flex justify-between w-1/2
       items-center text-center my-20"
      >
        <a
          href="https://www.instagram.com/productioncompany/"
          className="text-xl hover:scale-125"
        >
          <FaInstagram size={50} />
        </a>
        <a
          href="https://www.youtube.com/channel/UC1234567890"
          className="text-xl hover:scale-125"
        >
          <FaYoutube size={50} />
        </a>
        <a
          href="https://wa.me/341234567890"
          className="text-xl hover:scale-125"
        >
          <FaWhatsapp size={50} />
        </a>
        <a
          href="mailto:info@productioncompany.com"
          className="text-xl hover:scale-125"
        >
          <FaEnvelope size={50} />
        </a>
      </div>

      <div className="md:w-2/3 flex flex-col mx-8 gap-5 bg-white/10 p-5 rounded-xl text-lg text-white">
        <p>
          If you have any questions or would like to get in touch with us,
          please don't hesitate to contact us using the following information:
        </p>
        <p>
          Location: Barcelona, Spain Phone: (123) 456-7890 Email:
          info@productioncompany.com We look forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default Contact;
