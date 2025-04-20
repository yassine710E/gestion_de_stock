import { useForm } from "@inertiajs/react";
import { useState } from "react";

const useEditForm = (initialData, routeName, id, method = "put",photo = null) => {
        const [preview, setPreview] = useState(photo ? `/storage/${photo}` : null);
    
    const { data, setData, put, post, processing } = useForm(initialData)

    const formHandling = (e) => {
        e.preventDefault();
        if (method === "post") {
            post(route(routeName, id), {
                onSuccess: () => {
                    // Clear the form
                    setData(initialData);
                },
                preserveScroll: true,
            });
            return
        }
        put(route(routeName, id), {
            onSuccess: () => {
                // Clear the form
                setData(initialData);
            },
            preserveScroll: true,
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
            setData('photo', null);
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

export default useEditForm