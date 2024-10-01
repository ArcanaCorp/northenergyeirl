import { IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

import './blog.css'
import moment from "moment";
import 'moment/locale/es';

moment.locale('es');

export default function BlogCard ({ slug, title, text, images, date }) {

    const formattedDate = moment(date).format('LL');

    return (

        <div className='__card_blog'>

            <div className='__card_blog_img' style={{backgroundImage: `url(${images[0]})`}}>

                <Link to={`/blog/${slug}`} className='__a_btn_go'><IconArrowUpRight/></Link>

                <img src={images[0]} alt="Hombre trabajando..." />

                <p className='__badge_time'>{formattedDate}</p>

            </div>

            <div className='__card_blog_txt'>
                <h3 title={title}>{title}</h3>
                <div className="__text" dangerouslySetInnerHTML={{__html: text}}></div>
            </div>

        </div>

    )

}