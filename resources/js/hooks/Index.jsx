import { useEffect } from "react";
import { debounce } from "lodash";
import { useForm } from "@inertiajs/react";

const useFilterForm = (initialData, routeName, delay = 1000) => {
    const { data, setData, get ,delete: destroy } = useForm(initialData);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };



    const handleDelete = (e,id) => {

        e.preventDefault();
        const isConfirmed = window.confirm('are you sure  !!');
        
       if (isConfirmed) {
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
