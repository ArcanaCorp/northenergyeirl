import { Helmet } from "react-helmet";
import Contact from "../layout/sections/Contact";
import Questions from "../layout/sections/Questions";
import Services from "../layout/sections/Services";

export default function ServicesPage () {

    return (
        <>
            <Helmet>
                <title>NORTH ENERGY E.I.R.L. - Soluciones Eléctricas para Residencias, Comercio e Industria</title>
                
                <meta name="description" content="NORTH ENERGY E.I.R.L. ofrece soluciones integrales en electricidad para sectores residenciales, comerciales e industriales. Contáctanos para mantenimiento de instalaciones y montaje de redes eléctricas con garantía y seguridad."/>
                <meta name="keywords" content="servicios eléctricos, mantenimiento eléctrico, redes eléctricas, electricidad industrial, electricidad comercial, empresa eléctrica en Chiclayo, mantenimiento eléctrico peru, North Energy"/>
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes"/>
                <meta name="robots" content="index, follow"/>
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="NORTH ENERGY E.I.R.L. - Servicios Eléctricos para Hogares y Empresas"/>
                <meta property="og:description" content="Ofrecemos mantenimiento de instalaciones y montaje de redes eléctricas con un equipo profesional para los sectores residencial, comercial e industrial."/>
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png"/>
                <meta property="og:image:alt" content="Servicios eléctricos de North Energy E.I.R.L."/>
                <meta property="og:url" content="https://northenergyeirl.com/services"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L. - Soluciones Eléctricas"/>
                <meta property="og:locale" content="es_PE"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="NORTH ENERGY E.I.R.L. - Servicios Eléctricos Confiables"/>
                <meta name="twitter:description" content="Soluciones profesionales en electricidad. Mantén tus instalaciones seguras con nuestros servicios de mantenimiento y emergencia."/>
                <meta name="twitter:image" content="https://northenergyeirl.com/images/twitter-image.jpg"/>
                <meta name="twitter:image:alt" content="Servicios eléctricos de North Energy E.I.R.L."/>
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://northenergyeirl.com/services"/>
                
                {/* Additional Tags for Articles */}
                <meta property="article:tag" content="Servicios Eléctricos"/>
                <meta property="article:tag" content="Mantenimiento Eléctrico"/>
                <meta property="article:tag" content="Redes Eléctricas"/>
                <meta property="article:section" content="Soluciones Eléctricas"/>
            </Helmet>

            <Services/>

            <Questions/>

            <Contact/>
        </>
    );
}