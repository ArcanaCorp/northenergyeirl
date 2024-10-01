import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import { questions } from '../../db/services'
import './styles/questions.css'
import { useState } from 'react'

export default function Questions () {

    const [ isDesglose, setIsDesglose ] = useState({
        open: false,
        id: ''
    });

    const handleDesglose = (dgl, id) => {
        setIsDesglose(prev => ({
            ...prev,
            open: dgl,
            id: id
        }))
    }

    return (

        <section className="__section __section_question">

            <div className='__title'>

                <h2>
                    <p className="__title_txt_1">Preguntas</p>
                    <p className='__title_txt_2'>Frecuentes</p>
                    <svg className='__trz' width="154" height="67" viewBox="0 0 154 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.97485 65.3489C7.3402 55.0247 22.091 24.8408 30.6416 14.4768C33.6603 10.8178 37.4189 6.83648 42.0931 6.0285C51.0151 4.48626 57.7976 20.1195 60.5369 23.7897C64.4599 29.0461 68.8778 39.0534 77.2667 31.7982C81.1209 28.4648 82.969 23.3509 85.7605 19.0878C87.269 16.784 94.8787 -1.17205 103.689 2.00909C109.895 4.25017 119.437 23.3872 121.95 26.8232C124.087 29.7437 126.023 33.5933 129.489 34.6345C134.913 36.2643 136.32 25.4061 138.271 20.0888C139.053 17.9557 140.271 9.01718 145.43 13.1724C149.653 16.5741 150.463 22.5144 152.407 27.1266" stroke="#034184" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </h2>

            </div>

            <div className='__ctn'>

                <div className='__table'>

                    {questions.map((question, index) => (
                        <div className='__table_row' key={index}>
                            <div className='__table_title' onClick={() => handleDesglose(!isDesglose.open, index)}>
                                <h3>{question.pregunta}</h3>
                                <button>{isDesglose.open && isDesglose.id === index ? <IconChevronDown/> : <IconChevronUp/>}</button>
                            </div>
                            {isDesglose.open && isDesglose.id === index && (
                                <div className='__table_texts'>
                                    <p>{question.respuesta}</p>
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </div>

        </section>

    )

}