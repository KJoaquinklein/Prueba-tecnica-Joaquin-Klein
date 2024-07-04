"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";
import { validations } from "./validations";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import Aos from "aos";

const ContactForm: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const form = useRef<HTMLFormElement>(null);
    const [errorForm, setErrorForm] = useState({ user_name: "", user_email: "", message: "" });
    const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });

    const handleChangeData = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const property = event.target.name;
        const value = event.target.value;

        validations(errorForm, setErrorForm, property, value);

        setFormData({ ...formData, [property]: value });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (form.current === null) {
            console.log("El formulario no está disponible.");
            return;
        }

        if (!formData.message || !formData.user_email || !formData.user_name) {
            return Swal.fire({
                title: "Faltan datos",
                text: "Completa los datos de contacto para enviar el mensaje",
                icon: "warning",
                confirmButtonColor: "#bc4749",
                confirmButtonText: "Ok",
            });
        }

        if (errorForm.message || errorForm.user_email || errorForm.user_name) {
            return Swal.fire({
                title: "Datos erroneos",
                text: "Revisa los datos para enviar el mensaje",
                icon: "error",
                confirmButtonColor: "#bc4749",
                confirmButtonText: "Ok",
            });
        }

        emailjs
            .sendForm("service_zuhflsq", "template_40wvcgf", form.current, {
                publicKey: "eNVTHcPvs2RM7p2JZ",
            })
            .then(() => {
                Swal.fire({
                    title: "¡Mensaje enviado correctamente!",
                    text: "",
                    icon: "success",
                    confirmButtonColor: "#6a994e",
                    confirmButtonText: "Ok",
                });
                setFormData({ user_name: "", user_email: "", message: "" });
            })
            .catch(() => {
                Swal.fire({
                    title: "Algo salio mal :(",
                    text: "Intentelo nuevamente más tarde",
                    icon: "error",
                    confirmButtonColor: "#bc4749",
                    confirmButtonText: "Ok",
                });
                setFormData({ user_name: "", user_email: "", message: "" });
            });
    };

    return (
        <div id="contact" className={styles.containerContact}>
            <h2 className={styles.title} data-aos="fade-right">
                Contacto:
            </h2>
            <form ref={form} onSubmit={handleSubmit} className={styles.containerForm}>
                <div className={styles.containerInput}>
                    <label className={styles.titleLabel} htmlFor="user_name">
                        Nombre
                    </label>
                    <div className={styles.containerInputError}>
                        <input
                            onChange={handleChangeData}
                            className={errorForm.user_name ? styles.inputError : styles.input}
                            type="text"
                            name="user_name"
                            value={formData.user_name}
                        />
                        {errorForm.user_name ? <p className={styles.error}>❗ {errorForm.user_name}</p> : null}
                    </div>
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.titleLabel} htmlFor="user_email">
                        Email
                    </label>
                    <div className={styles.containerInputError}>
                        <input
                            onChange={handleChangeData}
                            className={errorForm.user_email ? styles.inputError : styles.input}
                            type="text"
                            name="user_email"
                            value={formData.user_email}
                        />
                        {errorForm.user_email ? <p className={styles.error}>❗ {errorForm.user_email}</p> : null}
                    </div>
                </div>
                <div className={styles.containerTextarea}>
                    <label className={styles.titleLabel} htmlFor="message">
                        Mensaje {errorForm.message ? <p className={styles.error}>❗ {errorForm.message}</p> : null}
                    </label>
                    <textarea
                        onChange={handleChangeData}
                        className={errorForm.message ? styles.textareaError : styles.textarea}
                        name="message"
                        cols={30}
                        rows={10}
                        value={formData.message}
                    ></textarea>
                </div>
                <button
                    className={
                        !formData.message || !formData.user_email || !formData.user_name
                            ? styles.buttonblock
                            : styles.button
                    }
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
