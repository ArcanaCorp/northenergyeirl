import { Helmet } from 'react-helmet'
import About from '../layout/sections/About'
import Blog from '../layout/sections/Blog'
import Clients from '../layout/sections/Clients'
import Contact from '../layout/sections/Contact'
import Hero from '../layout/sections/Hero'
import Mision from '../layout/sections/Mision'
import Works from '../layout/sections/Works'

import './styles/homepage.css'

export default function HomePage () {

    return (

        <>

            <Helmet>
                <title>NORTH ENERGY E.I.R.L. - Soluciones Eléctricas para Residencias, Comercio e Industria</title>
                
                <meta name="description" content="NORTH ENERGY E.I.R.L. ofrece servicios profesionales de mantenimiento de instalaciones eléctricas y montaje de redes eléctricas en sectores residenciales, comerciales e industriales. Calidad y seguridad garantizadas."/>
                <meta name="keywords" content="servicios eléctricos, mantenimiento eléctrico, redes eléctricas, electricidad industrial, electricidad comercial, North Energy, soluciones eléctricas, electricidad, empresa electrica, peru, lima, Chiclayo, Lambayeque"/>
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes"/>
                <meta name="robots" content="index, follow"/>
                
                <meta property="og:title" content="NORTH ENERGY E.I.R.L. - Soluciones Eléctricas Profesionales"/>
                <meta property="og:description" content="Especialistas en mantenimiento y montaje de redes eléctricas en los sectores residencial, comercial e industrial."/>
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png"/>
                <meta property="og:url" content="https://northenergyeirl.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L. - Soluciones Eléctricas Profesionales"/>
                <meta property="og:locale" content="es_PE"/>
                
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="NORTH ENERGY E.I.R.L. - Servicios Eléctricos de Confianza"/>
                <meta name="twitter:description" content="Servicios de alta calidad en instalación, mantenimiento y emergencia de redes eléctricas para diferentes sectores."/>
                <meta name="twitter:image" content="%PUBLIC_URL%/twitter-image.jpg"/>

                <link rel="canonical" href="https://northenergyeirl.com"/>
            </Helmet>
        
            <Hero/>

            <About/>

            <Mision/>

            <Works/>

            <Blog/>

            <Clients/>

            <Contact/>

        </>

    )

}