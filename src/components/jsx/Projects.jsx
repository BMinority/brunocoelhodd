import React from 'react'
import '../css/Projects.css'

import MaoriImg from '../../assets/screenshots/maoricross.png'
import CPJWImg from '../../assets/screenshots/controleDePublicacoes.png'
import InterarteImg from '../../assets/screenshots/interarte.png'
import PostoCidadeImg from '../../assets/screenshots/postoCidade.png'
import PedeJaImg from '../../assets/screenshots/pedeJa.png'
import CatchApiImg from '../../assets/screenshots/catchapi.png'
import NexusImg from '../../assets/screenshots/nexusmarvel.png'

const projetos = [
    {
        nome: 'MaoriCross',
        url: 'https://maoricross.vercel.app/',
        descricao: 'Site de divulgação do Box Maori Cross, localizado em Carpina-PE.',
        tipo: 'Projeto voluntário',
        tecnologias: ['React', 'CSS', 'JavaScript'],
        statusAtual: 'Em produção',
        imagem: MaoriImg,
    },
    {
        nome: 'CPJW',
        url: 'https://cpjw.vercel.app/',
        descricao: 'Sistema de controle de publicações para contabilidade mensal das Testemunhas de Jeová.',
        tipo: 'Projeto voluntário',
        tecnologias: ['React', 'CSS', 'JavaScript', 'PDFjs'],
        statusAtual: 'Em uso.',
        imagem: CPJWImg,
    },
        {
        nome: 'Marvel NEXUS',
        url: 'https://nexusmarvel.netlify.app/',
        descricao: 'Projeto de estudo com consumo de API Rest oficial da Marvel Comics.',
        tipo: 'Projeto de estudo.',
        tecnologias: ['React', 'Vite', 'TypeScript', 'Sass', 'API Rest'],
        statusAtual: 'Ativo.',
        imagem: NexusImg,
    },
        {
        nome: 'Catch API',
        url: 'https://catchapi.netlify.app/',
        descricao: 'Projeto de estudo com consumo de API Rest da PokeAPI.',
        tipo: 'Projeto de estudo',
        tecnologias: ['React', 'Vite', 'Sass', 'API Rest'],
        statusAtual: 'Ativo.',
        imagem: CatchApiImg,
    },
    {
        nome: 'Interarte Info',
        url: 'https://interarteinfo.netlify.app/',
        descricao: 'Site de divulgação dos serviços da Inter@rte - Informática e Gráfica rápida.',
        tipo: 'Projeto voluntário',
        tecnologias: ['React', 'CSS', 'JavaScript'],
        statusAtual: 'Em uso.',
        imagem: InterarteImg,
    },
    {
        nome: 'Posto Cidade',
        url: 'https://postocidadecarpina.vercel.app/',
        descricao: 'Site de divulgação do Posto Cidade, localizado em Carpina-PE.',
        tipo: 'Projeto voluntário',
        tecnologias: ['React', 'CSS', 'JavaScript'],
        statusAtual: 'Não utilizado',
        imagem: PostoCidadeImg,
    },
    {
        nome: 'Pede Já',
        url: 'https://pedeja.vercel.app/',
        descricao: 'Site fictício de pedidos de comida online, desenvolvido como projeto de estudo.',
        tipo: 'Projeto de estudo',
        tecnologias: ['React', 'CSS', 'JavaScript'],
        statusAtual: 'Ativo',
        imagem: PedeJaImg,
    },
]

function Projects() {
    return (
        <section className="bc-project-container" id='projects'>
            <h2 className="bc-project-title">Projetos de Destaque</h2>
            <div className="bc-project-content">
                {projetos.map((projeto, index) => (
                    <div className="bc-project-card" key={index}>
                        <a
                            href={projeto.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bc-project-image-link"
                        >
                            <img
                                src={projeto.imagem}
                                alt={`Imagem do projeto ${projeto.nome}`}
                                className="bc-project-thumb"
                                loading="lazy"
                            />
                        </a>
                        <div className="bc-project-info">
                            <h3>{projeto.nome}</h3>
                            <p className="bc-project-descricao">{projeto.descricao}</p>
                            <p><strong>Tipo:</strong> {projeto.tipo}</p>
                            <p><strong>Status:</strong> {projeto.statusAtual}</p>
                            <p><strong>Tecnologias:</strong> {projeto.tecnologias.join(', ')}</p>
                            <a href={projeto.url} target="_blank" rel="noopener noreferrer" className="bc-project-link">
                                Acessar projeto
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
