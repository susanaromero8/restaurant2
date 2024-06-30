import { useState } from 'react';
import { helpHttp } from '../helpers/helpHttp';

export const useForm = (initialForm, validationsForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setForm({
            ...form,[name]:value,
        });
    };

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validationsForm(form));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validationsForm(form));

        if (Object.keys(errors).length === 0){
            //alert("Enviando Formulario");
            setLoading(true);
            helpHttp()
            .post("https://formsubmit.co/ajax/susanaromero040800@gmail.com", {
                body: form,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            .then((res)=>{
                setLoading(false);
                setResponse(true);
                setForm(initialForm);
                setTimeout(()=> setResponse(false), 5000);
            });
        } else {
            return;
        }
    };
    
    return {
        form, errors, loading, response, handleChange, handleBlur, handleSubmit,
    };
};