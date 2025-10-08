import React, { useEffect } from "react";

export default function Whatsapp() {
  useEffect(() => {
    const whatsapp = document.querySelector(".whatsapp");
    if (whatsapp) {
      setTimeout(() => {
        whatsapp.classList.add("show");
      }, 800);
    }
  }, []);

  return (
    <div className="whatsapp">
      <p>Message us!</p>
      <a href="https://wa.me/9452873121" target="_blank" rel="noreferrer">
        <img src="/whatsapp.webp" alt="WhatsApp" />
      </a>
    </div>
  );
}
