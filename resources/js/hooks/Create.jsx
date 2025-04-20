import { useForm } from "@inertiajs/react";
import { useState } from "react";

const useCreateForm = (initialData,routeName) => {

    const [preview, setPreview] = useState(null);
    
    const { data, setData, post, processing } = useForm(initialData);
    


    const formHandling = (e) => {
        e.preventDefault();
        post(route(routeName), {
            onSuccess: () => setData(initialData)
        });
    }

    const changeHandling = (e) => {
        const { id, value } = e.target;
        setData(id, value);
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
            setData('photo', file);
        }
    };


    const handleRemove = () => {
        setPreview(null);
    };

    return {
        data,
        setData,
        processing,
        preview,
        formHandling,
        changeHandling,
        handleFileChange,
        handleRemove
    }
} 

export default useCreateForm;