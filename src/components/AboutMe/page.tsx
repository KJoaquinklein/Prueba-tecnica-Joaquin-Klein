"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

const AboutMe: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id="AboutMe" className={styles.containerAbout}>
            <h2 className={styles.title} data-aos="fade-right">
                Sobre mí:
            </h2>
            <div className={styles.containerText} data-aos="fade-left">
                <p className={styles.data}>
                    Edad: <strong>24</strong>
                </p>
                <p className={styles.data}>
                    Fecha de nacimiento: <strong>11 noviembre de 1999</strong>
                </p>
                <p className={styles.data}>
                    Ubicación: <strong>Barcelona | España</strong>
                </p>
                <p className={styles.data}>
                    Trabaja en: <strong>Barcelona Publicidad</strong>
                </p>
                <p className={styles.data}>
                    <strong>"</strong>
                    Soy una diseñadora gráfica apasionada por los viajes y la fotografía. Resido en la vibrante ciudad
                    de Barcelona, España, y tengo la suerte de trabajar en una reconocida empresa de publicidad, donde
                    puedo expresar mi creatividad y habilidades cada día. Me considero una persona extrovertida y
                    amigable, siempre dispuesta a echar una mano a mis compañeros de trabajo y a mis amigos.
                    <strong>"</strong>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
