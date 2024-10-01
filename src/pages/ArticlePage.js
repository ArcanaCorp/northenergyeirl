import { Helmet } from "react-helmet";
import Blog from "../layout/sections/Blog";
import { useParams } from "react-router-dom";
import Articles from "../layout/sections/Articles";
import { useDB } from "../context/DBContext";

import ogDefault from '../assets/img/og-default.png'

export default function ArticlePage () {

    const { slug } = useParams();
    const { blogs } = useDB();

    const article = blogs.find((blog) => blog.slug_blog === slug);

    if (!article) return <p>Artículo no encontrado</p>;
    
    const ogImage = article.images[0] || ogDefault;

    return (

        <>

            <Helmet>
                <title>{article.title_blog} - NORTH ENERGY E.I.R.L. - Blog de Soluciones Eléctricas y Consejos Profesionales</title>
                <meta name="description" content={article.title_blog} />
                <meta name="keywords" content={`blog soluciones eléctricas, mantenimiento eléctrico, instalación eléctrica, electricidad residencial, electricidad comercial, electricidad industrial, North Energy blog, ${article.title_blog}`} />
                <meta name="author" content="ARCANA CORP SAC, https://arcana.codes" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph Meta Tags (para Facebook y LinkedIn) */}
                <meta property="og:title" content={article.title_blog} />
                <meta property="og:description" content={article.title_blog} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://northenergyeirl.com/blog/${article.slug_blog}`} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Tu Sitio Web" />
                <meta property="og:locale" content="es_ES" />

                {/* Twitter Card Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article.title_blog} />
                <meta name="twitter:description" content={article.title_blog} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:site" content="@tu_usuario_twitter" />
                <meta name="twitter:creator" content="@tu_usuario_twitter" />

                {/* Meta Tags específicos de LinkedIn (opcional) */}
                <meta property="linkedin:site" content="https://northenergyeirl.com" />
                <meta property="linkedin:creator" content="ARCANA CORP SAC" />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://northenergyeirl.com/blog/${article.slug_blog}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": article.title_blog,
                        "datePublished": article.date_blog,
                        "author": {
                            "@type": "Organization",
                            "name": "NORTH ENERGY E.I.R.L.",
                            "url": "https://northenergyeirl.com"
                        },
                        "image": ogImage,
                        "url": `https://northenergyeirl.com/blog/${article.slug_blog}`,
                        "description": article.title_blog,
                    })}
                </script>
            </Helmet>

            <Articles article={article}/>

            <Blog/>

        </>

    )

}