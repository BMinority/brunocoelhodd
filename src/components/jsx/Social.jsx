import '../css/Social.css'

function Social() {
    return (
        <div className='social'>
            <h3>Redes sociais</h3>
            <ul className='social-list'>
                <li>
                    <a href='https://www.instagram.com/dev_bcoelho/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-instagram'></i>
                        Instagram
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/dev-bcoelho/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin'></i>
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href='https://github.com/BMinority' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                        Github
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Social