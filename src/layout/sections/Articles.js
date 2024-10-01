import moment from 'moment'
import './styles/articles.css'
import { Link } from 'react-router-dom';
import { IconBrandFacebook, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';

export default function Articles ({ article }) {

    const formatted = moment(article.date_blog).format('LL');

    return (

        <>
        
            <section className="__section __section_articles">

                <div className='__content_section'>

                    <div className='__images'>
                        {article.images.map((image, index) => (
                            <div key={index} className='__img' style={{backgroundImage: `url(${image})`}} itemprop="image" itemscope itemtype="https://schema.org/ImageObject"></div>
                        ))}
                    </div>

                    <div className='__content_blog'>

                        <div className='__line'></div>
                        <article className='__article' itemscope itemtype="https://schema.org/BlogPosting">
                            <h2 aria-label={article.title_blog}>
                                <p className='__p_1'><em itemprop="datePublished" content={article.date_blog}><time datetime={article.date_blog}>{formatted}</time></em></p>
                                <p className='__p_2' itemprop="headline">{article.title_blog}</p>
                            </h2>
                            <div dangerouslySetInnerHTML={{__html: article.text_blog}} itemprop="articleBody" id='contentBlog'></div>
                            <footer className='__share_on'>
                                <div className='__share'>
                                    <h4>Compartir:</h4>
                                    <ul>
                                        <li>
                                            <Link target='_blank' to={`https://www.linkedin.com/sharing/share-offsite/?url=https://northenergyeirl.com/blog/${article.slug_blog}`}><IconBrandLinkedin/></Link>
                                        </li>
                                        <li>
                                            <Link target='_blank' to={`https://www.facebook.com/sharer/sharer.php?u=https://northenergyeirl.com/blog/${article.slug_blog}`}><IconBrandFacebook/></Link>
                                        </li>
                                        <li>
                                            <Link target='_blank' to={`https://twitter.com/intent/tweet?url=https://northenergyeirl.com/blog/${article.slug_blog}`}><IconBrandX/></Link>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                        </article>

                    </div>

                </div>

            </section>

        </>

    )

}