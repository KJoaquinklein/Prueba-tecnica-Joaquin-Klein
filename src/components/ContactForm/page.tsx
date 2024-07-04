"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import useForm from "@/hooks/useForm";

const ContactForm: React.FC = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const { form, errorForm, formData, handleChangeData, handleSubmit } = useForm();

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
