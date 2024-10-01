import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useUI } from '../context/UIContext';
import { IconBrandFacebook, IconBrandLinkedin, IconMenu, IconX } from '@tabler/icons-react';

import logo from '../assets/img/logo.svg'

import './styles/headers.css'

export default function Headers () {

    const { handleChangeHeight } = useUI();

    const location = useLocation();
    const [ isToogleMenu, setIsToogleMenu ] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const headerRef = useRef();

    useEffect(() => {
        if (headerRef.current) {
            const height = headerRef.current.offsetHeight;
            handleChangeHeight(height)
        }
    })


    useEffect(() => {
        const handleScroll = () => {
            // Si el scroll está en la parte superior (offset es 0)
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Agregar el evento de scroll al montarse el componente
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento de scroll cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsToogleMenu(false); // Cierra el menú al cambiar de ruta
    }, [location.pathname]);

    return (

        <header className={`__header ${isScrolled ? '__header_scrolled' : ''}`} ref={headerRef}>

            <div className='__content'>

                <div className="__box">

                    <div className='__col __col_A'>
                        <Link to={'/'} className='__logo' title="Inicio - North Energy EIRL">
                            <img src={logo} alt='Logo de North Energy EIRL - Soluciones Eléctricas' className='__img_logo' />
                        </Link>
                    </div>

                    <div className='__col __col_B'>
                        <nav className='__nav_h' aria-label="Barra de navegación principal">
                            <ul className='__list_nav_h'>
                                <li className={`__item_nav_h ${location.pathname === '/' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/`} className='__a_nav_h' title="Ir a la página de inicio">
                                        <span className='__span_nav_h'>Inicio</span>
                                    </Link>
                                </li>
                                <li className={`__item_nav_h ${location.pathname === '/services' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/services`} className='__a_nav_h' title="Descubre nuestros servicios">
                                        <span className='__span_nav_h'>Servicios</span>
                                    </Link>
                                </li>
                                <li className={`__item_nav_h ${location.pathname === '/projects' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/projects`} className='__a_nav_h' title="Conoce nuestros proyectos">
                                        <span className='__span_nav_h'>Proyectos</span>
                                    </Link>
                                </li>
                                <li className={`__item_nav_h ${location.pathname === '/blog' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/blog`} className='__a_nav_h' title="Lee nuestras publicaciones en el blog">
                                        <span className='__span_nav_h'>Blog</span>
                                    </Link>
                                </li>
                                <li className={`__item_nav_h ${location.pathname === '/about' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/about`} className='__a_nav_h' title="Conoce más sobre nosotros">
                                        <span className='__span_nav_h'>Nosotros</span>
                                    </Link>
                                </li>
                                <li className={`__item_nav_h ${location.pathname === '/contact' ? '__item_nav_h--active' : ''}`}>
                                    <Link to={`/contact`} className='__a_nav_h'  title="Contáctanos">
                                        <span className='__span_nav_h'>Contacto</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <button className='__btn __btn_menu' onClick={() => setIsToogleMenu(!isToogleMenu)}>{isToogleMenu ? <IconX/> : <IconMenu/>}</button>
                    </div>

                </div>

                <nav className={`__nav ${isToogleMenu ? '__nav--active' : ''}`}>
                    <ul className='__list_nav'>
                        <li className={`__item_nav ${location.pathname === '/' ? '__item_nav--active' : ''}`}>
                            <Link to={`/`} className='__a_nav'>
                                <span className='__span_nav'>Inicio</span>
                            </Link>
                        </li>
                        <li className={`__item_nav ${location.pathname === '/services' ? '__item_nav--active' : ''}`}>
                            <Link to={`/services`} className='__a_nav'>
                                <span className='__span_nav'>Servicios</span>
                            </Link>
                        </li>
                        <li className={`__item_nav ${location.pathname === '/projects' ? '__item_nav--active' : ''}`}>
                            <Link to={`/projects`} className='__a_nav'>
                                <span className='__span_nav'>Proyectos</span>
                            </Link>
                        </li>
                        <li className={`__item_nav ${location.pathname === '/blog' ? '__item_nav--active' : ''}`}>
                            <Link to={`/blog`} className='__a_nav'>
                                <span className='__span_nav'>Blog</span>
                            </Link>
                        </li>
                        <li className={`__item_nav ${location.pathname === '/about' ? '__item_nav--active' : ''}`}>
                            <Link to={`/about`} className='__a_nav'>
                                <span className='__span_nav'>Nosotros</span>
                            </Link>
                        </li>
                        <li className={`__item_nav ${location.pathname === '/contact' ? '__item_nav--active' : ''}`}>
                            <Link to={`/contact`} className='__a_nav'>
                                <span className='__span_nav'>Contacto</span>
                            </Link>
                        </li>
                        <li className='__item_nav_network'>
                            <Link to={'/'} className='__a_nav_network'>
                                <IconBrandFacebook/>
                            </Link>
                            <Link to={'/'} className='__a_nav_network'>
                                <IconBrandLinkedin/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            
            </div>

        </header>

    )

}