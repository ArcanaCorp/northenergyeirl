import { Link } from 'react-router-dom'

import logo from '../assets/img/logo-white.svg'

import './styles/footer.css'
import { IconArrowUp, IconArrowUpRight, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandMailgun } from '@tabler/icons-react'
import { useState } from 'react'
import moment from 'moment'

export default function Footer () {

    const [ isEmail, setIsEmail ] = useState('');
    const [ isMessage, setIsMessage ] = useState('');
    const [ isOk, setIsOk ] = useState(false);

    const year = new Date().getFullYear()

    const handleSendEmail = async () => {

        if (!isEmail) {
            setIsMessage("Por favor, introduce un correo electrónico.");
            return;
        }
    
        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(isEmail)) {
            setIsMessage("Por favor, introduce un correo electrónico válido.");
            return;
        }

        try {
            
            const currentDay = moment().format('YYYY-MM-DD');

            const formData = new FormData();
            formData.append('email', isEmail)
            formData.append('date', currentDay)

            const response = await fetch(`https://api.northenergyeirl.com/news/`, {
                method: 'POST',
                body: formData
            })

            if (!response.ok) {
                throw new Error('Error en el envío. Intenta nuevamente.')
            }

            const data = await response.json();

            if (data.ok) {
                setIsOk(true);
                setIsMessage(data.message)
            } else {
                setIsMessage(data.message)
            }

        } catch (error) {
            setIsMessage(error.message)
        }

    } 

    return (

        <footer className="__footer">

            <div className='__content_footer'>

                <div className='__col __col_A'>

                    <div className='__log'>

                        <Link to={'/'}>
                            <img src={logo} alt='Logo de NORTH ENERGY EIRL - EMPRESA DE SERVICIOS ELECTROMECÁNICOS EN PERÚ' />
                        </Link>

                    </div>
                    
                    <div className='__form'>
                        <div className='__form_group'>
                            
                            {!isOk ? (
                                <>
                                    <label htmlFor='email'>Déjanos tu email para recibir más información</label>
                                    <div className='__form_control'>
                                        <div className='__bnt __bnt_ico'><IconBrandMailgun/></div>
                                        <input type='email' id='email' placeholder='Déjanos tu email para recibir más información' aria-placeholder='Déjanos tu email para recibir más información' onChange={(e) => setIsEmail(e.target.value)} />
                                        <button className='__bnt __bnt_send' onClick={handleSendEmail}><IconArrowUpRight/></button>
                                    </div>
                                </>
                            ) : (
                                <h4 style={{color: '#FFFFFF'}}>{isMessage}</h4>
                            )}
                        </div>
                    </div>

                    <div className='__copy_'>
                        <p>RUC: 20605713212</p>
                        <p>© {year} <Link to={'/'}>NORTH ENERGY EIRL</Link>, All rights reserved.</p>
                        <p style={{color: '#888888', marginTop: '.2rem'}}>Desarrollado y diseñado por <Link to={'https://arcana.codes'} style={{color: '#B3B3B3'}} target='_blank'>ARCANA CORP</Link></p>
                    </div>

                </div>

                <div className='__col __col_B'>

                    <Link to={'/'} className='__a_back'><IconArrowUp/></Link>

                    <nav>
                        <ul>
                            <li><span>Empresa</span></li>
                            <div className='__sep'></div>
                            <li>
                                <Link to={'/'}>Inicio</Link>
                            </li>
                            <li>
                                <Link to={'/services'}>Servicios</Link>
                            </li>
                            <li>
                                <Link to={'/projects'}>Proyectos</Link>
                            </li>
                        </ul>
                        <ul>
                            <li><span>Recursos</span></li>
                            <div className='__sep'></div>
                            <li>
                                <Link to={'/blog'}>Blog</Link>
                            </li>
                        </ul>
                        <ul>
                            <li><span>Nosotros</span></li>
                            <div className='__sep'></div>
                            <li>
                                <Link to={'/about'}>Nosotros</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contáctanos</Link>
                            </li>
                        </ul>
                    </nav>

                </div>
                
                <div className='__col __col_C'>

                    <ul>
                        <li>
                            <Link to={'/'} target='_blank'><IconBrandFacebook/></Link>
                        </li>
                        <li>
                            <Link to={'/'} target='_blank'><IconBrandLinkedin/></Link>
                        </li>
                        <li>
                            <Link to={'/'} target='_blank'><IconBrandInstagram/></Link>
                        </li>
                    </ul>

                </div>

            </div>

        </footer>

    )

}