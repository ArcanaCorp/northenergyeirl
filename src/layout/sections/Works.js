import { useState } from 'react'
import './styles/works.css'
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from '@tabler/icons-react'
import { Link } from 'react-router-dom';

import image from '../../assets/img/team/TimePhoto_20230911_100025.jpg'

export default function Works () {

    const [ worksPosition, setWorkPosition ] = useState(1)

    const handleChangePosition = (event) => {
        setWorkPosition(prevPosition => 
            event === 'next' 
                ? (prevPosition % 3) + 1 
                : Math.max(1, prevPosition - 1)
        );
    };

    return (

        <>
        
            <div className="__lines_separare"></div>

            <section className='__section __section_works'>

                <div className='__content_section'>

                    <div className='__row __row_A'>

                        <div className='__col __col_a'>
                            <h2>
                                <p className='__xtx_1'>Mantenimiento</p>
                                <p className='__xtx_2'>de Red</p>
                                <p className='__xtx_3'>Primaria</p>
                            </h2>
                        </div>

                        <div className='__col __col_p'>
                            <p>
                                Los trabajos se realizaron en el área que comprende la estructura 
                                PMI, estructura de derivación de conductor de aluminio, y subestación 
                                aérea biposte en 22.9 kV propiedad de la empresa Molino Ferreñafe, 
                                ubicado en la ciudad de Ferreñafe.
                            </p>

                            <div className='__controls'>
                                <div className={`__bar_progress`}>
                                    <div className={`__bar_completed __bar_completed_${worksPosition}0`}></div>
                                </div>
                                <div className='__controls_progress'>
                                    <button className={`__btn_event ${worksPosition === 1 ? '__btn_event_desactive' : ''}`} onClick={() => handleChangePosition('prev')}><IconArrowLeft/></button>
                                    <button className={`__btn_event`} onClick={() => handleChangePosition('next')}><IconArrowRight/></button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='__row __row_B'>

                        <div className={`__card_work ${worksPosition === 1 ? '__card_work--active' : ''}`} style={{backgroundImage: `url(${image})`}}>
                            <img src={image} alt='Hombres trabajando...' />
                            <Link to={'/'} className='__a_card_work'>
                                <div className='__go'><IconArrowUpRight/></div>
                                <div className='__description'>
                                    <h3>Title</h3>
                                    <div className='__line'></div>
                                    <p>
                                        Los trabajos se realizaron en el área que comprende 
                                        la estructura PMI, estructura de derivación de conductor 
                                        de aluminio, y subestación aérea biposte en 22.9 kV propiedad 
                                        de la empresa Molino Ferreñafe.
                                    </p>
                                </div>

                            </Link>
                        </div>
                        <div className={`__card_work ${worksPosition === 2 ? '__card_work--active' : ''}`} style={{backgroundImage: `url(${image})`}}>
                            <img src={image} alt='Hombres trabajando...' />
                            <Link to={'/'} className='__a_card_work'>
                                <div className='__go'><IconArrowUpRight/></div>
                                <div className='__description'>
                                    <h3>Title</h3>
                                    <div className='__line'></div>
                                    <p>
                                        Los trabajos se realizaron en el área que comprende 
                                        la estructura PMI, estructura de derivación de conductor 
                                        de aluminio, y subestación aérea biposte en 22.9 kV propiedad 
                                        de la empresa Molino Ferreñafe.
                                    </p>
                                </div>

                            </Link>
                        </div>
                        <div className={`__card_work ${worksPosition === 3 ? '__card_work--active' : ''}`} style={{backgroundImage: `url(${image})`}}>
                            <img src={image} alt='Hombres trabajando...' />
                            <Link to={'/'} className='__a_card_work'>
                                <div className='__go'><IconArrowUpRight/></div>
                                <div className='__description'>
                                    <h3>Title</h3>
                                    <div className='__line'></div>
                                    <p>
                                        Los trabajos se realizaron en el área que comprende 
                                        la estructura PMI, estructura de derivación de conductor 
                                        de aluminio, y subestación aérea biposte en 22.9 kV propiedad 
                                        de la empresa Molino Ferreñafe.
                                    </p>
                                </div>

                            </Link>
                        </div>

                    </div>

                </div>

            </section>

        </>

    )

}