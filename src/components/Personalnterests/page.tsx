"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

//!aislar en un archivo types
interface objInterests {
    interestName: string;
    img: string;
}

const arrayIntrests: objInterests[] = [
    {
        interestName: "Bateria",
        img: "https://schoolofrock.imgix.net/img/news-article-hero@2x/beginning-drums2-1645469645.jpg",
    },
    {
        interestName: "Composición musical",
        img: "https://www.universidadviu.com/sites/universidadviu.com/files/images/Composici%C3%B3n%20musical%20moderna.jpg",
    },
    {
        interestName: "Diseño web",
        img: "https://fruntera.com/wp-content/uploads/2022/11/diseno-web.jpg",
    },
    {
        interestName: "Viajar",
        img: "https://cbahoy.com.ar/wp-content/uploads/2023/09/descarga.webp",
    },
];

const Personalnterests: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div id="Personalnterests" className={styles.containerAbout}>
            <h2 className={styles.title} data-aos="fade-right">
                Intereses Personales:
            </h2>
            <div className={styles.containerInterest} data-aos="fade-left">
                {arrayIntrests.map((int) => (
                    <div className={styles.cardInterest}>
                        <img className={styles.img} src={int.img} alt="" />
                        <p className={styles.interestTitle}>{int.interestName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personalnterests;
