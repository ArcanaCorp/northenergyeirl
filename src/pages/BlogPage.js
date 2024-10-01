import { Helmet } from "react-helmet";
import Blog from "../layout/sections/Blog";
import Contact from "../layout/sections/Contact";
import Questions from "../layout/sections/Questions";

export default function BlogPage () {

    return (

        <>
        
            <Helmet>
                <title>NORTH ENERGY E.I.R.L. - Blog de Soluciones Eléctricas y Consejos Profesionales</title>

                <meta name="description" content="Descubre en nuestro blog los mejores consejos y soluciones para el mantenimiento e instalación de redes eléctricas en el hogar, comercio e industria. Información útil y actualizada." />
                <meta name="keywords" content="blog soluciones eléctricas, mantenimiento eléctrico, instalación eléctrica, electricidad residencial, electricidad comercial, electricidad industrial, North Energy blog" />
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags */}
                <meta property="og:title" content="NORTH ENERGY E.I.R.L. - Blog de Soluciones Eléctricas" />
                <meta property="og:description" content="Lee artículos sobre instalación y mantenimiento eléctrico, además de consejos útiles para mejorar la seguridad de tus instalaciones." />
                <meta property="og:image" content="%PUBLIC_URL%/og-default.png" />
                <meta property="og:image:alt" content="Blog de soluciones eléctricas de North Energy E.I.R.L." />
                <meta property="og:url" content="https://northenergyeirl.com/blog" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="NORTH ENERGY E.I.R.L. - Blog" />
                <meta property="og:locale" content="es_PE" />

                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NORTH ENERGY E.I.R.L. - Blog de Consejos y Soluciones Eléctricas" />
                <meta name="twitter:description" content="Consejos y soluciones para la instalación y mantenimiento de redes eléctricas en diferentes sectores." />
                <meta name="twitter:image" content="https://northenergyeirl.com/images/twitter-blog.jpg" />
                <meta name="twitter:image:alt" content="Blog de soluciones eléctricas de North Energy" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://northenergyeirl.com/blog" />
            </Helmet>

            <Blog page={true} />

            <Questions/>

            <Contact/>

        </>

    )

}