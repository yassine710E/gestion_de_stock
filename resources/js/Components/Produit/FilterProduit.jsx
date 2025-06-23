import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/Select";
import DangerButton from "@/Components/DangerButton";

function FilterProduit({
    data,
    changeHandler,
    resetFilters,
    status,
    categories,
}) {
    const filterFields = [
        {
            label: "Product Name:",
            type: "text",
            name: "nom_produit",
            value: data.nom_produit,
            placeholder: "Search By name...",
            component: TextInput,
        },
        {
            label: "Category:",
            type: "select",
            name: "category_id",
            value: data.category_id,
            placeholder: "Filtrer par catégorie...",
            component: Select,
            props: {
                data: categories,
                method: changeHandler,
                currentData: data.category_id,
            },
        },
        {
            label: "Minimal Price:",
            type: "number",
            name: "min_prix",
            value: data.min_prix,
            placeholder: "Min Price...",
            component: TextInput,
        },
        {
            label: "Maximal Price:",
            type: "number",
            name: "max_prix",
            value: data.max_prix,
            placeholder: "Max Price...",
            component: TextInput,
        },
    ];

    return (
        <div className="bg-white rounded-lg p-4 sm:p-6 border">
            <div className="flex flex-col gap-4 w-full lg:flex-row lg:items-end">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                    {filterFields.map((field, index) => (
                        <div key={index} className="flex flex-col">
                            <InputLabel className="text-black font-medium mb-2">
                                {field.label}
                            </InputLabel>
                            {field.type === "select" ? (
                                <field.component {...field.props} />
                            ) : (
                                <field.component
                                    type={field.type}
                                    name={field.name}
                                    value={field.value}
                                    onChange={changeHandler}
                                    placeholder={field.placeholder}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div
                    className="mt-2 lg:mt-0 lg:ml-4 flex justify-end"
                    style={{ display: status() ? "none" : "flex" }}
                    hidden={status()}
                >
                    <button onClick={resetFilters}>
                        <DangerButton>Clear</DangerButton>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterProduit;
