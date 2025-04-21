import { useEffect } from "react";
import { debounce } from "lodash";
import { useForm } from "@inertiajs/react";
import Swal from 'sweetalert2'

const useFilterForm = (initialData, routeName, delay = 1000) => {
    const { data, setData, get ,delete: destroy } = useForm(initialData);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };



    const handleDelete = async (e,id) => {

        e.preventDefault();
        const result = await Swal.fire({
            title: 'are you sure ?',
            text: "Once deleted, you will not be able to recover this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Confirm !',
            cancelButtonText: 'cancel'
        })
        
       if (result.isConfirmed) {
        destroy(route(`${routeName.split('.')[0]}.destroy`, id));
       }
    }

    const resetFilters = () => {
        const resetData = Object.fromEntries(
            Object.keys(initialData).map((key) => [key, ""])
        );
        setData(resetData);
    };

    const status = () => {
        return !Object.values(data).some((value) => value !== null  );
    };

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            get(route(routeName), {
                preserveState: true,
                replace: true,
            });
        }, delay);

        if (!status()) {
            debouncedSearch();
        }

        return () => debouncedSearch.cancel();
    }, [data]);

    return {
        data,
        setData,
        changeHandler,
        resetFilters,
        handleDelete,
        status,
    };
};

export default useFilterForm;
