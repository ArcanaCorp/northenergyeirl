import { IconChevronLeft, IconChevronRight, IconCircuitCapacitorPolarized } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import banner1 from '../../assets/img/banner1.jpg'

import './styles/hero.css'
import { useEffect, useState } from 'react'

export default function Hero () {

    const [ imageBg, setImageBg ] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            // Si imageBg es 3, vuelve a 1, si no, aumenta el valor
            setImageBg(imageBg === 3 ? 1 : imageBg + 1);
        }, 4000);
    
        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, [imageBg]);

    return (

        <section className='__section __section_hero'>

                <div className={`__content_hero __content_hero_${imageBg}`}>
                    <img className='__img_banner' src={banner1} alt='Banner Conexiones eléctricas confiables y seguras - North Energy EIRL - Soluciones Eléctricas' aria-label='Banner Conexiones eléctricas confiables y seguras - North Energy EIRL - Soluciones Eléctricas' title='Banner Conexiones eléctricas confiables y seguras - North Energy EIRL - Soluciones Eléctricas' />
                    <div className='__bento __bento_gd_1'>
                        <div className='__text_primary'>
                            <h1 aria-label='Conexiones eléctricas confiables y seguras - North Energy EIRL - Soluciones Eléctricas'><p className='__text_scondt'>Conexiones eléctricas </p> <p className='__text_accentued'>Confiables</p></h1>
                        </div>
                    </div>
                    <div className='__bento __bento_gd_2'>
                        <svg className='__rounded __rounded_top_left' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 60.0005V0.000488281H60.0006C0 0.000488281 0 0.000488281 0 60.0005Z" fill="white"/>
                        </svg>
                        <div className='__controls __controls_slider'>
                            <button className='__btn __btn_prev'><IconChevronLeft/></button>
                            <button className='__btn __btn_next'><IconChevronRight/></button>
                        </div>
                    </div>
                    <div className='__bento __bento_gd_3'>
                        <div className='__text_primary'>
                            <h1 aria-label='Conexiones eléctricas confiables y seguras - North Energy EIRL - Soluciones Eléctricas'><p className='__text_scondt'>y</p><p className='__text_accentued'>Seguras</p></h1>
                        </div>
                    </div>
                    <div className='__bento __bento_gd_4'>
                        <svg className='__rounded __rounded_top_left' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 60.0005V0.000488281H60.0006C0 0.000488281 0 0.000488281 0 60.0005Z" fill="white"/>
                        </svg>
                        <svg className='__rounded __rounded_bottom_left' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 60.0005L0 60.0005L0 -9.15527e-05C0 60.0005 0 60.0005 60 60.0005Z" fill="white"/>
                        </svg>
                    </div>
                    <div className='__bento __bento_gd_5'>
                        <div className='__badge __badge_info'>
                            <div className='__content_badge'>
                                <span className='__ico'>
                                    <IconCircuitCapacitorPolarized/>
                                </span>
                                <span className='__txt'>
                                    <p aria-label='Una buena conexión y'>Una buena conexión y</p>
                                    <p aria-label='un buen mantenimiento'>un buen mantenimiento</p>
                                </span>
                            </div>
                            <Link to={'/blog'} className='__btn __btn_primary'>Aprende más</Link>
                        </div>
                    </div>
                    <div className='__bento __bento_gd_6'>
                        <svg className='__rounded __rounded_top_left' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 60.0005V0.000488281H60.0006C0 0.000488281 0 0.000488281 0 60.0005Z" fill="white"/>
                        </svg>
                        <svg className='__rounded __rounded_bottom_left' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 60.0005L0 60.0005L0 -9.15527e-05C0 60.0005 0 60.0005 60 60.0005Z" fill="white"/>
                        </svg>
                    </div>

                </div>

        </section>

    )

}