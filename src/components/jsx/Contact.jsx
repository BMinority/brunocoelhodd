import React, { useState } from 'react';
import '../css/Contact.css';

function Contact() {
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        fetch("https://formsubmit.co/ajax/brunocoelho66@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nome: form.nome.value,
                sobrenome: form.sobrenome.value,
                telefone: form.telefone.value,
                email: form.email.value,
                mensagem: form.mensagem.value
            })
        })
            .then(response => response.json())
            .then(data => {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                    window.location.reload();
                }, 3000);
            })
            .catch(error => {
                alert('Ocorreu um erro. Tente novamente mais tarde.');
                console.error(error);
            });
    };

    return (
        <section className='bc-contact-container' id='contact'>
            <div className='bc-contact-content'>
                <h2 className='bc-contact-title'>Entre em Contato</h2>
                <p className='bc-contact-description'>
                    Preencha o formulário abaixo para me enviar uma mensagem. Responderei o mais rápido possível!
                </p>
                <form onSubmit={handleSubmit} className="bc-contact-form">
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

                {showPopup && (
                    <div className="bc-popup-overlay">
                        <div className="bc-popup">
                            Mensagem enviada. Obrigado!
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;
