import React from 'react'
import '../css/Home.css'
import '../css/HomeResponsive.css'
import Mockup01 from "../../assets/mockups/pedeja-ipad.png";
import Mockup02 from "../../assets/mockups/pedeja-iphone.png";
import Mockup03 from "../../assets/mockups/pedeja-macbook.png";

function Home() {
    return (
        <section className='bc-home-container'
            id='home'>
            <header className='bc-home-header'>
                <div className='bc-home-tittle'>
                    <h1>Bem-vindo!</h1>
                    <p>
                        Sou especialista em design e desenvolvimento com foco em performance, conversão e usabilidade.
                    </p>
                </div>

                <div className='bc-home-projects-container'>
                    <div className='bc-home-projects'>
                        <div className='bc-home-projects-img'>
                            <img src={Mockup03} alt="imagem macbook" id='macbook-img' />
                            <img src={Mockup01} alt="imagem ipad" id='ipad-img' />
                            <img src={Mockup02} alt="imagem iphone" id='iphone-img' />
                        </div>
                    </div>

                    <div className='bc-home-skills'>
                        <ul>
                            <li>
                                <img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"/>
                                <p>React JS</p>
                            </li>
                            <li>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>
                                <p>TypeScript</p>
                            </li>
                            <li>
                                <img width="64" height="64" src="https://img.icons8.com/nolan/64/sass.png" alt="sass"/>
                                
                            </li>
                            <li>
                               <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
                                <p>Node.js</p>
                            </li>
                            <li>
                                <div id='html-css-img'>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>

                                  <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                </div>
                                <p>HTML e CSS</p>
                            </li>
                            <li>
                                <img width="48" height="48" src="https://img.icons8.com/color/48/adobe-photoshop--v1.png" alt="adobe-photoshop--v1"/>
                                <p>Photoshop</p>
                            </li>
                            <li>
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/coreldraw-2021.png" alt="coreldraw-2021"/>
                                <p>CorelDraw</p>
                            </li>
                            <li>
                              <img width="48" height="48" src="https://img.icons8.com/color/48/microsoft-office-2019.png" alt="microsoft-office-2019"/>
                                <p>Office</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Home