import '../css/Experience.css'


function Experience() {
    const experiences = [
        {
            funcao: "Operador de caixa",
            empresa: "Farmácia Permanente",
            periodo: "2016 - 2020",
            descricao: "Responsável por realizar atendimento ao público no caixa e no balcão. Realizava manutenção de estoque e gôndolas, alimentação do sistema por via de notas fiscais, limpeza local e prestava auxílio no balanço trimestral."
        },
        {
            funcao: "Analista administrativo",
            empresa: "Prefeitura Municipal do Carpina",
            periodo: "2022 - 2024",
            descricao: "Responsável por prestar atendimento ao público presencial e virtualmente. Atuava na criação, edição, armazenamento e despacho de documentos importantes com base nos princípios da arquivologia"
        },
        {
            funcao: "Comerciante",
            empresa: "Autônomo",
            periodo: "2008 - 2021",
            descricao: "Realizava o preparo de lanches e refeições, prestando atendimento ao público de forma presencial e via telefone."
        },
        {
            funcao: "Designer gráfico",
            empresa: "Autônomo",
            periodo: "2020 - 2024",
            descricao: "Realizava criação de artes gráficas para material impresso e digital, incluindo criação de marcas e material de branding."
        }
    ]

    return (
        <div className='bc-expecience' id='experience'>
            <h1>
                Experiência Profissional
            </h1>

            <ul className='bc-expecience-content'>
                {experiences.map((exp, index) => (
                    <li key={index} className='bc-experience-item'>
                        <h2>
                            {exp.funcao} - <span>{exp.empresa}</span>
                        </h2>
                        <p className='bc-experience-periodo'>
                            {exp.periodo}
                        </p>
                        <p className='bc-experience-descricao'>
                            {exp.descricao}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience