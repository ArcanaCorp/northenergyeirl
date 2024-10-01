import { Helmet } from "react-helmet";
import About from "../layout/sections/About";
import Contact from "../layout/sections/Contact";
import Mision from "../layout/sections/Mision";
import Questions from "../layout/sections/Questions";

export default function AboutPage () {

    return (

        <>

            <Helmet>
                <title>Sobre Nosotros - NORTH ENERGY E.I.R.L. - Líderes en Soluciones Eléctricas</title>

                <meta name="description" content="Conoce más sobre NORTH ENERGY E.I.R.L., nuestra misión, visión y el equipo que lidera las soluciones eléctricas más eficientes y seguras para el sector residencial, comercial e industrial." />
                <meta name="keywords" content="sobre nosotros, North Energy, soluciones eléctricas, electricidad industrial, electricidad comercial, electricidad residencial, empresa eléctrica, misión, visión" />
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Sobre Nosotros - NORTH ENERGY E.I.R.L." />
                <meta property="og:description" content="Conoce nuestra trayectoria, misión y visión. Líderes en el sector eléctrico, brindando soluciones seguras y eficientes." />
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png" />
                <meta property="og:image:alt" content="Equipo de trabajo de North Energy E.I.R.L." />
                <meta property="og:url" content="https://northenergyeirl.com/about" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L." />
                <meta property="og:locale" content="es_PE" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Conoce más sobre NORTH ENERGY E.I.R.L." />
                <meta name="twitter:description" content="Descubre quiénes somos, nuestra misión y cómo ayudamos a mejorar el sector eléctrico en todo el país." />
                <meta name="twitter:image" content="https://northenergyeirl.com/images/twitter-about.jpg" />
                <meta name="twitter:image:alt" content="Equipo de trabajo de North Energy E.I.R.L." />

                {/* Canonical URL */}
                <link rel="canonical" href="https://northenergyeirl.com/about" />
            </Helmet>
        
            <About/>

            <Mision/>

            <Questions/>

            <Contact/>

        </>

    )

}