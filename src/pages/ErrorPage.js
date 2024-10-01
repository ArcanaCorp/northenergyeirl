import { Link } from 'react-router-dom'
import logo from '../assets/img/logo-white.svg'

import './styles/errorpage.css'

export default function ErrorPage () {

    return (

        <div className='__content_error'>

            <img className='__img_logo' src={logo} alt='Logo de NORTH ENERGY EIRL | EMPRESA DE ELECTRICIDAD' />

            <div className='__ctn'>
                <h4>Error page</h4>
                <h1>404</h1>
                <p>No se encontró la página que estás buscando</p>
                <Link to={'/'} className='__a_btn'>Volver al inicio</Link>
            </div>

        </div>

    )

}