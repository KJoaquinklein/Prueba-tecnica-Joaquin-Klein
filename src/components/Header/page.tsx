"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

const Header: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={styles.containerProfile}>
            <img
                className={styles.imgProfile}
                src="https://this-person-does-not-exist.com/img/avatar-genf3a88e48c5cfa5815091a4e7990b116c.jpg"
                alt="Foto de Lucía Martínez Rivera"
                // data-aos="fade-down"
            />
            <div className={styles.containerText}>
                <h1 className={styles.title}>Lucía Martínez Rivera</h1>
                <div className={styles.links}>
                    <a href="#AboutMe" className={styles.link}>
                        Sobre mí
                    </a>
                    <a href="#Personalnterests" className={styles.link}>
                        Mis intereses
                    </a>
                    <a href="#contact" className={styles.link}>
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
