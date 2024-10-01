import { Helmet } from "react-helmet";
import Contact from "../layout/sections/Contact";
import Questions from "../layout/sections/Questions";
import Works from "../layout/sections/Works";

export default function ProjectsPage () {

    return (

        <>

            <Helmet>
                <title>NORTH ENERGY E.I.R.L. - Proyectos de Redes Eléctricas en Residencias, Comercio e Industria</title>
                
                <meta name="description" content="Descubre los proyectos eléctricos realizados por NORTH ENERGY E.I.R.L. en el ámbito residencial, comercial e industrial. Garantizamos calidad, seguridad y eficiencia en cada instalación eléctrica."/>
                <meta name="keywords" content="proyectos eléctricos, instalaciones eléctricas, redes eléctricas, electricidad industrial, electricidad comercial, North Energy, empresa eléctrica, redes eléctricas peru"/>
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes"/>
                <meta name="robots" content="index, follow"/>
                
                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="NORTH ENERGY E.I.R.L. - Proyectos Eléctricos Profesionales"/>
                <meta property="og:description" content="Revisa nuestros proyectos destacados en redes eléctricas para sectores residenciales, comerciales e industriales."/>
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png"/>
                <meta property="og:image:alt" content="Proyectos eléctricos de North Energy E.I.R.L."/>
                <meta property="og:url" content="https://northenergyeirl.com/projects"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L. - Proyectos Eléctricos"/>
                <meta property="og:locale" content="es_PE"/>

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="NORTH ENERGY E.I.R.L. - Proyectos de Instalaciones Eléctricas"/>
                <meta name="twitter:description" content="Proyectos destacados de instalaciones y mantenimiento de redes eléctricas para hogares, empresas e industrias."/>
                <meta name="twitter:image" content="https://northenergyeirl.com/images/twitter-projects.jpg"/>
                <meta name="twitter:image:alt" content="Proyectos eléctricos de North Energy E.I.R.L."/>
                
                {/* Canonical URL */}
                <link rel="canonical" href="https://northenergyeirl.com/projects"/>
            </Helmet>
        
            <Works/>

            <Works/>

            <Questions/>

            <Contact/>

        </>

    )

}