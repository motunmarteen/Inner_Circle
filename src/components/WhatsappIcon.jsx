import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io"

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon fixed bottom-8 right-8 z-10">
      <a
        href="https://api.whatsapp.com/send?phone=2347026328160" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp
          className="w-12 h-12 rounded-full shadow-md text-green-800" // Adjust the size and styling as needed
        />
      </a>
    </div>
  );
};

export default WhatsAppIcon;
