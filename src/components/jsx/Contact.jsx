import React from 'react';
import '../css/Contact.css';

function Contact() {
    const phoneNumber = '5581989206365';
    const message = encodeURIComponent('Olá! Gostaria de entrar em contato.');
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <section className='bc-contact-container' id='contact'>
            <div className='bc-contact-content'>
                <h2 className='bc-contact-title'>Entre em Contato</h2>
                <p className='bc-contact-description'>
                    Estou à disposição para discutir seus projetos e ideias.
                    Clique no botão abaixo para me enviar uma mensagem no WhatsApp.
                </p>
                <a
                    href={whatsappLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bc-contact-button'
                >
                    Fale Comigo no WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Contact;