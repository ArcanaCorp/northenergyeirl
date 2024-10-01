import { Link, Outlet, useLocation } from "react-router-dom";
import Headers from "../layout/Headers";
import { IconBrandWhatsapp } from "@tabler/icons-react";

import './styles/layout.css'
import { useUI } from "../context/UIContext";
import Footer from "../layout/Footer";
import { useEffect } from "react";

export default function Layout () {

    const { headerHeight } = useUI();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (

        <>
        
            <Headers/>

            <main className="__main" style={{paddingTop: `${headerHeight}px`}}>
                <Link to={'https://wa.me/51979997070'} target="_blank" className="__a_wh"><IconBrandWhatsapp/></Link>
                <Outlet/>
            </main>

            <Footer/>

        </>

    )

}