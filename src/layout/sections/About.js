import './styles/about.css'

import team1 from '../../assets/img/team/IMG-20220718-WA0027.jpg'
import team2 from '../../assets/img/team/IMG-20220718-WA0088.jpg'

import team3 from '../../assets/img/team/IMG-20220718-WA0089.jpg'
import team4 from '../../assets/img/team/TimePhoto_20230922_124446.jpg'
import team5 from '../../assets/img/team/TimePhoto_20230922_124440.jpg'
import team6 from '../../assets/img/team/TimePhoto_20230922_121408.jpg'

import team7 from '../../assets/img/team/IMG-20231109-WA0163.jpg'
import team8 from '../../assets/img/team/IMG-20231109-WA0164.jpg'
import team9 from '../../assets/img/team/IMG-20240903-WA0046.jpg'
import team10 from '../../assets/img/team/IMG-20220718-WA0041.jpg'
import { useEffect, useState } from 'react'

const imageArray = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];

export default function About () {

    const [gridImage1, setGridImage1] = useState(team3);
    const [gridImage2, setGridImage2] = useState(team4);
    const [gridImage3, setGridImage3] = useState(team5);
    const [gridImage4, setGridImage4] = useState(team6);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Generar índices aleatorios para seleccionar imágenes
            const randomIndex1 = Math.floor(Math.random() * imageArray.length);
            const randomIndex2 = Math.floor(Math.random() * imageArray.length);
            const randomIndex3 = Math.floor(Math.random() * imageArray.length);
            const randomIndex4 = Math.floor(Math.random() * imageArray.length);
      
            // Actualizar los estados con las imágenes seleccionadas aleatoriamente
            setGridImage1(imageArray[randomIndex1]);
            setGridImage2(imageArray[randomIndex2]);
            setGridImage3(imageArray[randomIndex3]);
            setGridImage4(imageArray[randomIndex4]);
        }, 4000); // Cambiar cada 4 segundos
      
        return () => clearInterval(intervalId); 
    })

    return (

        <>

            <section className='__section __section_about'>

                <div className='__cen_cirl'>
                    <div className='__circle_ext'>
                        <div className='__photo_abo __photo_1' style={{backgroundImage: `url(${team1})`}}>
                            <img src={team1} alt='Equipo de North Energy trabajando' />
                        </div>
                        <div className='__photo_abo __photo_2' style={{backgroundImage: `url(${team2})`}}>
                            <img src={team2} alt='Equipo de North Energy trabajando' />
                        </div>
                        <div className='__circle_int'></div>
                    </div>
                </div>

                <div className='__wrp_title'>

                    <div className='__cyn_ttl'>
                        <div className='__bad_ttl'>
                            <p>Nosotros</p>
                        </div>

                        <div className='__ttx_ttl'>
                            <h1 aria-label='Puedes aprender más sobre nosotros'>
                                <p><span className='__span_light'>Puedes aprender</span> <span className='__span_regular_1'>más sobre</span>  </p>
                                <p><span className='__span_regular'>Nosotros</span></p>
                                <svg width="154" height="67" className='__trazo' viewBox="0 0 154 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.97485 65.3489C7.3402 55.0247 22.091 24.8408 30.6416 14.4768C33.6603 10.8178 37.4189 6.83648 42.0931 6.0285C51.0151 4.48626 57.7976 20.1195 60.5369 23.7897C64.4599 29.0461 68.8778 39.0534 77.2667 31.7982C81.1209 28.4648 82.969 23.3509 85.7605 19.0878C87.269 16.784 94.8787 -1.17205 103.689 2.00909C109.895 4.25017 119.437 23.3872 121.95 26.8232C124.087 29.7437 126.023 33.5933 129.489 34.6345C134.913 36.2643 136.32 25.4061 138.271 20.0888C139.053 17.9557 140.271 9.01718 145.43 13.1724C149.653 16.5741 150.463 22.5144 152.407 27.1266" stroke="#034184" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </h1>
                        </div>
                    </div>

                </div>

            </section>

            <section className='__section __section_about_'>

                <div className='__bento_grd'>

                    <div className='__itm_grd __itm_grd_1' style={{backgroundImage: `url(${gridImage1})`}}>
                        <img src={gridImage1} alt='Equipo trabajando' />
                    </div>
                    <div className='__itm_grd __itm_grd_2' style={{backgroundImage: `url(${gridImage2})`}}>
                        <img src={gridImage2} alt='Equipo trabajando' />
                    </div>
                    <div className='__itm_grd __itm_grd_3' style={{backgroundImage: `url(${gridImage3})`}}>
                        <img src={gridImage3} alt='Equipo trabajando' />
                    </div>
                    <div className='__itm_grd __itm_grd_4' style={{backgroundImage: `url(${gridImage4})`}}>
                        <img src={gridImage4} alt='Equipo trabajando' />
                    </div>

                </div>

            </section>
        
        </>

    )

}