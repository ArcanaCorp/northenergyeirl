import './styles/mision.css'

import banner1 from '../../assets/img/team/TimePhoto_20230911_090315.jpg'
import { useEffect, useState } from 'react'

export default function Mision () {

    const [ bannerActive, setBannerActive ] = useState(1);

    const handleChangeBanner = (banner) => setBannerActive(banner);

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerActive((prevBanner) => (prevBanner === 4 ? 1 : prevBanner + 1));
        }, 3000); // Cada 3 segundos

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return (

        <>
        
            <section className="__section __section_mision">

                <div className='__content_section'>

                    <div className='__slid'>

                        <div className='__figure' style={{backgroundImage: `url(${banner1})`}}>

                            <div className='__figure_itm __figure_itm_1'></div>
                            <div className='__figure_itm __figure_itm_2'></div>
                            <div className='__figure_itm __figure_itm_3'></div>
                            <div className='__figure_itm __figure_itm_4'></div>

                        </div>

                        <h2 className={`__view_h2 __view_h2_1 ${bannerActive === 1 ? '__view_h2--active' : ''}`} onClick={() => handleChangeBanner(1)}>Nuestra Visión</h2>
                        <h2 className={`__view_h2 __view_h2_2 ${bannerActive === 2 ? '__view_h2--active' : ''}`} onClick={() => handleChangeBanner(2)}>Nuestra Misión</h2>
                        <h2 className={`__view_h2 __view_h2_3 ${bannerActive === 3 ? '__view_h2--active' : ''}`} onClick={() => handleChangeBanner(3)}>Nuestra Cultura</h2>
                        <h2 className={`__view_h2 __view_h2_4 ${bannerActive === 4 ? '__view_h2--active' : ''}`} onClick={() => handleChangeBanner(4)}>Nuestros Valores</h2>

                    </div>

                    <div className='__wrp_msn'>

                        <div className='__line'></div>
                        {bannerActive === 1 && (
                            <div style={{transition: `.3s ease all`}}>
                                <h2>
                                    <p className='__p_1'>Nuestra</p>
                                    <p className='__p_2'>Visión</p>
                                </h2>

                                <p className='__contn_msn'>
                                    Ser los mejores en desarrollar valor, innovación y diferenciación a 
                                    través del desarrollo de servicios y estudios técnicos, soluciones 
                                    integrales y proyectos electromecánicos que impactan eficazmente a 
                                    nuestros clientes, en la industria, empresas, instituciones, sociedad 
                                    y gobierno.
                                </p>
                            </div>
                        )}
                        {bannerActive === 2 && (
                            <div style={{transition: `.3s ease all`}}>
                                <h2>
                                    <p className='__p_1'>Nuestra</p>
                                    <p className='__p_2'>Misión</p>
                                </h2>

                                <p className='__contn_msn'>
                                    Ofrecer los mejores servicios especializados en proyecto, 
                                    ejecución de obras y mantenimiento de instalaciones electromecánicas 
                                    de Baja y Media Tensión, logrando ser diferenciados por los clientes 
                                    debido a nuestra grupo profesional, capacidad de respuesta, soluciones, 
                                    tiempos y compromisos.
                                </p>
                            </div>
                        )}
                        {bannerActive === 3 && (
                            <div style={{transition: `.3s ease all`}}>
                                <h2>
                                    <p className='__p_1'>Nuestra</p>
                                    <p className='__p_2'>Cultura</p>
                                </h2>

                                <p className='__contn_msn'>
                                    Nuestra empresa se caracteriza en la integración, colaboración, 
                                    investigación, desarrollo, gestión, supervisión, enseñanza, compartir, 
                                    comunicación y aprendizaje de manera transparente, integral, eficiente, 
                                    responsable y generando valor, innovación y diferenciación, en todas las 
                                    actividades y decisiones que se desarrollen dentro de la empresa, fuera 
                                    de ella y con todos las partes involucradas, detonando el desarrollo de 
                                    todos nuestros colaboradores, que permitan satisfacer todos los requerimientos 
                                    del cliente y llegar a nuestros objetivos.
                                </p>
                            </div>
                        )}
                        {bannerActive === 4 && (
                            <div style={{transition: `.3s ease all`}}>
                                <h2>
                                    <p className='__p_1'>Nuestros</p>
                                    <p className='__p_2'>Valores</p>
                                </h2>

                                <p className='__contn_msn'>
                                    <ul>
                                        <li>
                                            <p><b>Compromiso</b></p>
                                            <p>La profesionalidad de nuestros colaboradores, que trabaja junto a nuestros clientes para garantizar su satisfacción.</p>
                                        </li>
                                        <li>
                                            <p><b>Prestaciones</b></p>
                                            <p>Innovación continua y responsable al servicio de la transición sostenible y la seguridad eléctrica.</p>
                                        </li>
                                        <li>
                                            <p><b>Confianza</b></p>
                                            <p>La integridad en las relaciones con y entre las partes interesadas es la piedra angular de nuestra ética. La lealtad es la palanca de nuestra eficacia (flexibilidad, capacidad de reacción y servicio de atención post servicio) y colaboración con nuestros clientes</p>
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        )}

                    </div>

                </div>

            </section>

        </>

    )

}