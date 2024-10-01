import { Link } from 'react-router-dom'
import './styles/location.css'
import { IconBrandFacebook, IconBrandLinkedin, IconMail, IconPhone } from '@tabler/icons-react'

export default function Location() {

    return (

        <>

            <section className="__section __section_location">

                <div className='__content_section'>

                    <div className='__maps'>
                        <iframe title='Ubícanos en la siguiente dirección' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.122747398099!2d-79.84008242264362!3d-6.75488237581568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef0adfee4395%3A0x8685d01b09e89903!2sPur%C3%ADsima%201023%2C%20Jos%C3%A9%20Leonardo%20Ortiz%2014003!5e0!3m2!1ses-419!2spe!4v1727117093383!5m2!1ses-419!2spe" style={{border: '0', width: '100%', height: '450px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className='__wrp_mps'>
                        <div className='__line'></div>
                        <div style={{transition: `.3s ease all`}}>
                            <h2>
                                <p className='__p_1'>Ubícanos</p>
                                <p className='__p_2'>Estamos cerca</p>
                            </h2>
                            <p className='__contn_msn'>
                                <ul>
                                    <li>
                                        <Link to={'https://www.facebook.com'} target='_blank'>
                                            <span className='__ico'><IconBrandFacebook/></span>
                                            <div>
                                                <p className='__p_scd'>Síguenos en</p>
                                                <p className='__p_pmy'>NORTH ENERGY EIRL</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'https://www.facebook.com'} target='_blank'>
                                            <span className='__ico'><IconBrandLinkedin/></span>
                                            <div>
                                                <p className='__p_scd'>Visítanos</p>
                                                <p className='__p_pmy'>NORTH ENERGY EIRL</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'https://www.facebook.com'} target='_blank'>
                                            <span className='__ico'><IconPhone/></span>
                                            <div>
                                                <p className='__p_scd'>Llámanos al</p>
                                                <p className='__p_pmy'>+51 979 997 070</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'https://www.facebook.com'} target='_blank'>
                                            <span className='__ico'><IconMail/></span>
                                            <div>
                                                <p className='__p_scd'>Escríbenos al</p>
                                                <p className='__p_pmy'>contact@northenergyeirl.com</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'https://www.facebook.com'} target='_blank'>
                                            <span className='__ico'><IconMail/></span>
                                            <div>
                                                <p className='__p_scd'>Legalidad</p>
                                                <p className='__p_pmy'>20605713212</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            <div className="__lines_separare"></div>


        </>

    )

}