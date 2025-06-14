import React from 'react';
import '../css/Contact.css';

function Contact() {
    return (
        <section className='bc-contact-container' id='contact'>
            <div className='bc-contact-content'>
                <h2 className='bc-contact-title'>Entre em Contato</h2>
                <p className='bc-contact-description'>
                    Preencha o formulário abaixo para me enviar uma mensagem. Responderei o mais rápido possível!
                </p>
                <form
                    action="https://formsubmit.co/brunocoelho66@gmail.com"
                    method="POST"
                    className="bc-contact-form"
                >
                    {/* Evita spam */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://seusite.com/obrigado" />

                    <div className="bc-contact-grid">
                        <input type="text" name="nome" placeholder="Nome" required />
                        <input type="text" name="sobrenome" placeholder="Sobrenome" required />
                        <input type="tel" name="telefone" placeholder="Telefone com DDD" required />
                        <input type="email" name="email" placeholder="Seu e-mail" required />
                    </div>
                    <textarea name="mensagem" rows="5" placeholder="Escreva sua mensagem..." required></textarea>
                    <button type="submit" className="bc-contact-button">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
