import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialMedia: React.FC = () => {
  return (
    <div className="flex justify-end py-3 space-x-4 px-4">
      {/* Disabled Facebook and Twitter links */}
      <a className="p-2 bg-gray-700 text-white rounded-full opacity-50 cursor-not-allowed pointer-events-none">
        <FaFacebookF size={20} />
      </a>
      <a className="p-2 bg-gray-700 text-white rounded-full opacity-50 cursor-not-allowed pointer-events-none">
        <FaTwitter size={20} />
      </a>
      {/* Active WhatsApp link */}
      <a
        href="https://wa.me/2348033734820"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default SocialMedia;
