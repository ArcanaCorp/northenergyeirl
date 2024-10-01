import { IconBriefcase, IconList, IconMail, IconPhone } from '@tabler/icons-react'
import './styles/contact.css'
import { useState } from 'react'
import moment from 'moment';

export default function Contact () {

    const [ isInfo, setIsInfo ] = useState({
        name: '',
        service: '',
        phone: '',
        email: '',
        message: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [isMessage, setIsMessage] = useState('');
    const [ isOk, setIsOk ] = useState(false);

    const handleChangeInfo = (e) => {
        const { name, value } = e.target;
        setIsInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSendInfo = async () => {
        const { name, service, phone, email, message } = isInfo;

        // Validar que los campos requeridos estén completos
        if (!name || !service || !phone || !email) {
            setIsMessage('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Validar el formato del correo electrónico
        if (!validateEmail(email)) {
            setIsMessage('Por favor, ingresa un correo electrónico válido.');
            return;
        }

        try {
            setIsLoading(true);
            setIsMessage('');

            const currentDate = moment().format('YYYY-MM-DD') // Obtener la fecha actual en formato YYYY-MM-DD

            const formData = new FormData();
            formData.append('name', name);
            formData.append('service', service);
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('message', message || ''); // El campo 'message' es opcional
            formData.append('date', currentDate);

            const response = await fetch(`https://api.northenergyeirl.com/leads/`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Error en el servidor. Inténtalo más tarde.');
            }

            const data = await response.json();

            if (data.ok) {
                setIsOk(true);
                setIsMessage(data.message); // Mensaje de éxito
            } else {
                setIsMessage(data.message || 'No pudimos procesar tu solicitud.');
            }
        } catch (error) {
            setIsMessage(error.message || 'Ocurrió un error inesperado.');
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <section className="__section __section_contact">

            <div className='__square'>

                <div className='__badge_title_1'>
                    <h2>
                        <p className='__txt_1'>Contáctanos</p>
                        <p className='__txt_2'>hoy mismo</p>
                    </h2>
                </div>

                <div className='__form'>

                    {!isOk ? ( 
                        <>

                            <div className='__form_group __form_flex'>
                                <div className='__form_control'>
                                    <label htmlFor='name_client' className='__label'>Ingresa el nombre de la compañia</label>
                                    <div className='__control'>
                                        <span className='__icon'><IconBriefcase/></span>
                                        <input type='text' className='__entry' name='name' id='name_client' placeholder='Ingresa el nombre de la compañia' aria-placeholder='Ingresa el nombre de la compañia' onChange={(e) => handleChangeInfo(e)} />
                                    </div>  
                                </div>
                                <div className='__form_control'>
                                    <label htmlFor='service_client' className='__label'>Ingresa el servicio que están solicitando</label>
                                    <div className='__control'>
                                        <span className='__icon'><IconList/></span>
                                        <input type='text' list='servicesList' className='__entry' name='service' id='service_client' placeholder='Ingresa el servicio que estan solicitando' aria-placeholder='Ingresa el servicio que estan solicitando' onChange={(e) => handleChangeInfo(e)} />
                                        <datalist id='servicesList'>
                                            <option value={'Desarrollo de Proyectos Técnicos'}>Desarrollo de Proyectos Técnicos</option>
                                            <option value={'Ejecución de Proyectos Electromecánicos'}>Ejecución de Proyectos Electromecánicos</option>
                                            <option value={'Mantenimiento de Redes Eléctricas'}>Mantenimiento de Redes Eléctricas</option>
                                            <option value={'Auditorias Eléctricas'}>Auditorias Eléctricas</option>
                                        </datalist>
                                    </div>
                                </div>
                            </div>

                            <div className='__form_group __form_flex'>
                                <div className='__form_control'>
                                    <label htmlFor='phone_client' className='__label'>Ingresa el número telefónico</label>
                                    <div className='__control'>
                                        <span className='__icon'><IconPhone/></span>
                                        <input type='text' className='__entry' name='phone' id='phone_client' placeholder='Ingresa el número telefónico de la compañia' aria-placeholder='Ingresa el número telefónico de la compañia' onChange={(e) => handleChangeInfo(e)} />
                                    </div>  
                                </div>
                                <div className='__form_control'>
                                    <label htmlFor='mail_client' className='__label'>Ingresa el correo electrónico de la compañia</label>
                                    <div className='__control'>
                                        <span className='__icon'><IconMail/></span>
                                        <input type='email' className='__entry' name='email' id='mail_client' placeholder='Ingresa el correo electrónico de la compañia' aria-placeholder='Ingresa el correo electrónico de la compañia' onChange={(e) => handleChangeInfo(e)} />
                                    </div>
                                </div>
                            </div>

                            <div className='__form_group __form_flex'>
                                <div className='__form_control'>
                                    <label htmlFor='message_client' className='__label'>Déjanos un mensaje para contactarnos</label>
                                    <textarea className='__entry_box' name='message' id='message_client' placeholder='Déjanos un mensaje para contactarnos' aria-placeholder='Déjanos un mensaje para contactarnos' onChange={(e) => handleChangeInfo(e)} />
                                </div>
                            </div>
                        
                        </> 
                    ) : (

                        <h1 style={{color: '#FFFFFF', textAlign: 'center'}}>{isMessage}</h1>

                    )}

                </div>

                <div className='__badge_title_2'>
                    <button className='__btn_send' onClick={handleSendInfo}>{isLoading ? 'Enviando...' : 'Enviar'}</button>
                </div>

            </div>

        </section>

    )

}