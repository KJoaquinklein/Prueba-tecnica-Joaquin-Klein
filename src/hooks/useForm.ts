import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { IForm } from "@/hooks/types";
import { validations } from "@/components/ContactForm/validations";

const useForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [errorForm, setErrorForm] = useState<IForm>({ user_name: "", user_email: "", message: "" });
    const [formData, setFormData] = useState<IForm>({ user_name: "", user_email: "", message: "" });

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
                title: "Datos erróneos",
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
                    title: "Algo salió mal :(",
                    text: "Inténtelo nuevamente más tarde",
                    icon: "error",
                    confirmButtonColor: "#bc4749",
                    confirmButtonText: "Ok",
                });
                setFormData({ user_name: "", user_email: "", message: "" });
            });
    };

    return {
        form,
        errorForm,
        formData,
        handleChangeData,
        handleSubmit,
    };
};

export default useForm;
