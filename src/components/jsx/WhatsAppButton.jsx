import React from 'react';
import '../css/WhatsAppButton.css';

function WhatsAppButton() {
    const phoneNumber = '5581989206365';
    const message = encodeURIComponent('Olá! Estive no seu site e gostaria de conversar sobre um projeto.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
        >
            <img
                src="https://img.icons8.com/3d-fluency/94/whatsapp.png"
                alt="whatsapp"
            />
        </a>
    );
}

export default WhatsAppButton;
