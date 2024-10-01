import './styles/services.css'

import image from '../../assets/img/services/IMG-20220718-WA0049.jpg'
import ejecucion from '../../assets/img/services/IMG-20240903-WA0034.jpg'
import mantenimiento from '../../assets/img/services/TimePhoto_20230922_124440.jpg'
import auditoria from '../../assets/img/services/TimePhoto_20230922_090016.jpg'

export default function Services () {

    return (

        <>
        
            <section className="__section __section_services">

                <div className='__title'>

                    <h2>
                        <p className="__title_txt_1">Nuestros servicios</p>
                        <p className='__title_txt_2'>de Ingeniería</p>
                        <svg className='__trz' width="154" height="67" viewBox="0 0 154 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.97485 65.3489C7.3402 55.0247 22.091 24.8408 30.6416 14.4768C33.6603 10.8178 37.4189 6.83648 42.0931 6.0285C51.0151 4.48626 57.7976 20.1195 60.5369 23.7897C64.4599 29.0461 68.8778 39.0534 77.2667 31.7982C81.1209 28.4648 82.969 23.3509 85.7605 19.0878C87.269 16.784 94.8787 -1.17205 103.689 2.00909C109.895 4.25017 119.437 23.3872 121.95 26.8232C124.087 29.7437 126.023 33.5933 129.489 34.6345C134.913 36.2643 136.32 25.4061 138.271 20.0888C139.053 17.9557 140.271 9.01718 145.43 13.1724C149.653 16.5741 150.463 22.5144 152.407 27.1266" stroke="#034184" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </h2>

                </div>

                <div className='__contnt'>

                    <div className='__row __row_ltr'>

                        <div className='__imgs'>
                            <div className='__fig'><img src={image} alt={`Desarrollo de proyectos técnicos`} /></div>
                        </div>

                        <div className='__text'>
                            <h2>
                                <p className='__txt_p_1'>Desarrollo de Proyectos Técnicos</p>
                                <p className='__txt_p_2'>y Estudios Definitivos</p>
                            </h2>
                            <p className='__xtx'>Realizamos estudios completos para la planificación de sistemas eléctricos en entornos residenciales, comerciales, industriales y especializados. Incluimos cálculos de carga, diseño de planos, selección de materiales y simulaciones de rendimiento eléctrico. Nos aseguramos de cumplir con normativas técnicas. Proveemos documentación para licencias y permisos.</p>
                        </div>

                    </div>

                    <div className='__row __row_rtl'>

                        <div className='__imgs'>
                            <div className='__fig'><img src={ejecucion} alt={`Desarrollo de proyectos técnicos`} /></div>
                        </div>

                        <div className='__text'>
                            <h2>
                                <p className='__txt_p_1'>Ejecución de Proyectos</p>
                                <p className='__txt_p_2'>Electromecánicos</p>
                            </h2>
                            <p className='__xtx'>Ofrecemos la instalación y mantenimiento de sistemas eléctricos en baja tensión para naves industriales. Nos especializamos en cableado, tableros eléctricos y sistemas de iluminación. Aseguramos el correcto funcionamiento de todos los componentes electromecánicos. Garantizamos seguridad y eficiencia operativa. Realizamos ajustes y optimizaciones periódicas.</p>
                        </div>

                    </div>

                    <div className='__row __row_ltr'>

                        <div className='__imgs'>
                            <div className='__fig'><img src={mantenimiento} alt={`Desarrollo de proyectos técnicos`} /></div>
                        </div>

                        <div className='__text'>
                            <h2>
                                <p className='__txt_p_1'>Mantenimiento de</p>
                                <p className='__txt_p_2'>Redes Eléctricas</p>
                            </h2>
                            <p className='__xtx'>Proveemos mantenimiento preventivo y correctivo para redes eléctricas en baja y media tensión. Incluye inspección de líneas, equipos y dispositivos de protección. Mantenemos subestaciones eléctricas y sistemas de puesta a tierra. Aseguramos continuidad operativa y prevención de fallos. Cumplimos con las normativas de seguridad eléctrica.</p>
                        </div>

                    </div>

                    <div className='__row __row_rtl'>

                        <div className='__imgs'>
                            <div className='__fig'><img src={auditoria} alt={`Desarrollo de proyectos técnicos`} /></div>
                        </div>

                        <div className='__text'>
                            <h2>
                                <p className='__txt_p_1'>Auditorías</p>
                                <p className='__txt_p_2'>Eléctricas</p>
                            </h2>
                            <p className='__xtx'>Realizamos auditorías eléctricas para verificar la seguridad, eficiencia y cumplimiento normativo en instalaciones residenciales, comerciales e industriales. Identificamos riesgos y proponemos mejoras en el sistema. Evaluamos el consumo energético para optimizar el rendimiento. Emitimos informes detallados con recomendaciones de actualización.</p>
                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}