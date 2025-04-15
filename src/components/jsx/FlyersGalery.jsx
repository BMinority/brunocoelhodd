import React from 'react';
import '../css/FlyersGalery.css';

import BemViverImg01 from "../../assets/works/bemviver-Página 1.png";
import BemViverImg02 from "../../assets/works/bemviver-Página 2.png";
import eSolutionImg01 from "../../assets/works/e-solution-Página 1.png";
import eSolutionImg03 from "../../assets/works/e-solution-Página 3.png";
import precoBomImg01 from "../../assets/works/PrecoBom01.png";
import precoBomImg02 from "../../assets/works/PrecoBom02.png";

const flyersToDisplay = [
    { id: 1, src: BemViverImg01, alt: "Flyer Bem Viver" },
    { id: 4, src: eSolutionImg01, alt: "Flyer E-Solution" },
    { id: 7, src: precoBomImg01, alt: "Flyer Preço Bom" },
    { id: 2, src: BemViverImg02, alt: "Flyer Bem Viver Detalhe" },
    { id: 5, src: eSolutionImg03, alt: "Flyer E-Solution Detalhe" },
    { id: 8, src: precoBomImg02, alt: "Flyer Preço Bom Detalhe" }
];

function FlyersGalery() {
    return (
        <section className='flyers-galery-container' id='galery'>
            <div className='call-to-action'>
                <h1>Transforme Ideias em Impacto Visual!</h1>
                <p className='sub-headline'>Designs criativos e profissionais que impulsionam sua marca.</p>
            </div>
            <div className='flyers-display'>
                {flyersToDisplay.map(flyer => (
                    <img key={flyer.id} src={flyer.src} alt={flyer.alt} className='flyer-image' />
                ))}
            </div>
        </section>
    );
}

export default FlyersGalery;