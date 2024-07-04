import Image from "next/image";
import styles from "./page.module.css";

//* Components
import Header from "@/components/Header/page";
import AboutMe from "@/components/AboutMe/page";
import Personalnterests from "@/components/Personalnterests/page";
import ContactForm from "@/components/ContactForm/page";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Header />
                <AboutMe />
                <Personalnterests />
                <ContactForm />
            </div>
        </main>
    );
}

//! colores
//* https://coolors.co/visualizer/edafb8-f7e1d7-dedbd2-b0c4b1-4a5759
