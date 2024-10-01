import { Helmet } from "react-helmet";
import Contact from "../layout/sections/Contact";
import Location from "../layout/sections/Location";
import Questions from "../layout/sections/Questions";

export default function ContactPage () {

    return (

        <>

            <Helmet>
                <title>Contáctanos - NORTH ENERGY E.I.R.L. - Soluciones Eléctricas Profesionales</title>

                <meta name="description" content="Ponte en contacto con NORTH ENERGY E.I.R.L. para cualquier consulta sobre servicios eléctricos en los sectores residencial, comercial e industrial. Estamos listos para atenderte." />
                <meta name="keywords" content="contacto, North Energy, servicios eléctricos, consultas, soporte eléctrico, soluciones eléctricas, instalación eléctrica, mantenimiento eléctrico, empresa eléctrica" />
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="Contáctanos - NORTH ENERGY E.I.R.L." />
                <meta property="og:description" content="Resuelve tus dudas sobre nuestros servicios eléctricos profesionales. Contáctanos ahora." />
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png" />
                <meta property="og:image:alt" content="Contacto con North Energy E.I.R.L." />
                <meta property="og:url" content="https://northenergyeirl.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L." />
                <meta property="og:locale" content="es_PE" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contáctanos - NORTH ENERGY E.I.R.L." />
                <meta name="twitter:description" content="¿Tienes preguntas o necesitas soporte eléctrico? Contáctanos y obtén soluciones rápidas y profesionales." />
                <meta name="twitter:image" content="https://northenergyeirl.com/images/twitter-contact.jpg" />
                <meta name="twitter:image:alt" content="Formulario de contacto con North Energy" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://northenergyeirl.com/contact" />
            </Helmet>
        
            <Location/>

            <Questions/>

            <Contact/>

        </>

    )

}