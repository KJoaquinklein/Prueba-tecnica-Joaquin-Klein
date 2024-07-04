import { IForm } from "@/hooks/types";

export const validations = (errorForm, setErrorForm, property, value) => {
    if (property === "user_name") {
        if (!value.length) {
            return setErrorForm({ ...errorForm, [property]: "Ingrese su nombre" });
        }
        return setErrorForm({ ...errorForm, [property]: "" });
    }
    if (property === "message") {
        if (!value.length) {
            return setErrorForm({ ...errorForm, [property]: "Ingrese un mensaje" });
        }
        return setErrorForm({ ...errorForm, [property]: "" });
    }
    if (property === "user_email") {
        if (!value.length) {
            return setErrorForm({ ...errorForm, [property]: "Ingrese su email" });
        }
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value)) {
            return setErrorForm({ ...errorForm, [property]: "Ingrese su email" });
        }
        return setErrorForm({ ...errorForm, [property]: "" });
    }
};
