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
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                                </svg>
                                <p>JavaScript</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
                                    <path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"></path><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"></path><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"></path><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"></path><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"></path><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"></path></g>
                                </svg>
                                <p>React JS</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                                </svg>
                                <p>Node.js</p>
                            </li>
                            <li>
                                <div id='html-css-img'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                                    </svg>
                                </div>
                                <p>HTML e CSS</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#50e6ff" d="M36,6H12c-3.314,0-6,2.686-6,6v24c0,3.314,2.686,6,6,6h24c3.314,0,6-2.686,6-6V12	C42,8.686,39.314,6,36,6z"></path><path fill="#092347" d="M36,40H12c-2.209,0-4-1.791-4-4V12c0-2.209,1.791-4,4-4h24c2.209,0,4,1.791,4,4v24	C40,38.209,38.209,40,36,40z"></path><path fill="#fff" d="M14.507,15.372c0-0.106,0.077-0.195,0.182-0.207c0.4-0.044,1.516-0.135,3.897-0.135 c3.588,0,6.101,1.423,6.101,5.317c0,3.512-2.391,5.573-6.249,5.573c-0.225,0-0.45,0-1.216,0v5.882c0,0.098-0.08,0.178-0.178,0.178 h-2.358c-0.098,0-0.178-0.08-0.178-0.178V15.372z M17.222,23.447c0,0,1.187,0.008,1.455,0.008c2.203,0,3.205-1.306,3.205-3.056 c0-1.639-0.974-2.917-3.01-2.917c-0.839,0-1.649,0.048-1.649,0.048V23.447z"></path><path fill="#fff" d="M26.156,28.97c0-0.095,0.103-0.154,0.182-0.102c0.504,0.337,1.527,0.914,3.111,0.914 c1.034,0,1.688-0.445,1.688-1.171c0-0.804-1.105-1.387-2.017-1.882c-0.907-0.492-2.944-1.282-2.944-3.826 c0-2.255,1.802-3.615,4.256-3.615c0.94,0,1.977,0.146,2.677,0.401c0.115,0.042,0.185,0.154,0.185,0.277l0,2.291 c0,0.094-0.099,0.155-0.178,0.103c-0.439-0.287-1.407-0.726-2.739-0.726c-1.109,0-1.597,0.54-1.597,1.09 c0,0.964,1.284,1.367,2.436,2.043c1.797,1,2.63,1.977,2.63,3.508c0,2.504-1.867,3.91-4.396,3.91c-1.306,0-2.534-0.285-3.162-0.667 c-0.087-0.053-0.131-0.149-0.131-0.251L26.156,28.97z"></path>
                                </svg>
                                <p>Photoshop</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <linearGradient id="AMqdbwFXbt1rRZunQ5Enta_9kTbRIN6cDXX_gr1" x1="27.068" x2="23.068" y1="7.254" y2="29.087" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#80e81f"></stop><stop offset=".339" stop-color="#67d326"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#AMqdbwFXbt1rRZunQ5Enta_9kTbRIN6cDXX_gr1)" d="M30,42H18c-6.627,0-12-5.373-12-12V18c0-6.627,5.373-12,12-12h24v24 C42,36.627,36.627,42,30,42z"></path><rect width="36" height="6" x="6" y="26" opacity=".05"></rect><rect width="36" height="6" x="6" y="27" opacity=".07"></rect><linearGradient id="AMqdbwFXbt1rRZunQ5Entb_9kTbRIN6cDXX_gr2" x1="23.524" x2="24.024" y1="41.334" y2="28.501" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#80e81f"></stop><stop offset=".258" stop-color="#71df21"></stop><stop offset="1" stop-color="#05a333"></stop></linearGradient><path fill="url(#AMqdbwFXbt1rRZunQ5Entb_9kTbRIN6cDXX_gr2)" d="M30,42H18c-6.627,0-12-5.373-12-12v-2h36v2C42,36.627,36.627,42,30,42z"></path><path d="M34.464,30.528L34.464,30.528l-0.347-1.965L17.95,12.396c-0.756-0.756-2.074-0.756-2.828,0	l-3.536,3.535C11.208,16.309,11,16.812,11,17.347c0,0.534,0.208,1.036,0.586,1.412l16.171,16.172l7.709,1.289L34.464,30.528z" opacity=".05"></path><path d="M33.652,28.806L17.596,12.749c-0.567-0.566-1.556-0.566-2.121,0l-3.536,3.535	c-0.284,0.283-0.439,0.661-0.439,1.062c0,0.401,0.156,0.777,0.439,1.06l16.058,16.059l2.775,0.465l0-0.001l4.078,0.682	L33.652,28.806z" opacity=".07"></path><linearGradient id="AMqdbwFXbt1rRZunQ5Entc_9kTbRIN6cDXX_gr3" x1="26.625" x2="21.625" y1="22.458" y2="27.458" gradientUnits="userSpaceOnUse"><stop offset=".305" stop-color="#f5fcff"></stop><stop offset=".704" stop-color="#d3e6d3"></stop><stop offset=".865" stop-color="#a4cba5"></stop></linearGradient><path fill="url(#AMqdbwFXbt1rRZunQ5Entc_9kTbRIN6cDXX_gr3)" d="M33.812,32.595L34.236,35l-2.423-0.405L33.812,32.595z M12.293,18.052l15.945,15.945	l2.363,0.395l3-3l-0.413-2.345L17.243,13.102c-0.391-0.391-1.024-0.391-1.414,0l-3.536,3.536	C11.902,17.028,11.902,17.662,12.293,18.052z"></path>
                                </svg>
                                <p>CorelDraw</p>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                    <path fill="#e64a19" d="M7 12L29 4 41 7 41 41 29 44 7 36 29 39 29 10 15 13 15 33 7 36z"></path>
                                </svg>
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