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
    return (
        <div className="bg-white rounded-lg p-6 my-3 flex justify-between gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full">
                <div className="flex flex-col">
                    <InputLabel className="text-gray-700 font-medium">
                        Nom produit:
                    </InputLabel>
                    <TextInput
                        type="text"
                        name="nom_produit"
                        value={data.nom_produit}
                        onChange={changeHandler}
                        placeholder="Rechercher par nom..."
                    />
                </div>
                <div className="flex flex-col">
                    <InputLabel className="text-gray-700 font-medium">
                        Catégorie:
                    </InputLabel>
                    <Select
                        data={categories}
                        name="category_id"
                        method={changeHandler}
                        currentData={data.category_id}
                        placeholder="Filtrer par catégorie..."
                    />
                </div>
                <div className="flex flex-col">
                    <InputLabel className="text-gray-700 font-medium">
                        Prix minimum:
                    </InputLabel>
                    <TextInput
                        type="number"
                        name="min_prix"
                        value={data.min_prix}
                        onChange={changeHandler}
                        placeholder="Prix min..."
                    />
                </div>
                <div className="flex flex-col">
                    <InputLabel className="text-gray-700 font-medium">
                        Prix maximum:
                    </InputLabel>
                    <TextInput
                        type="number"
                        name="max_prix"
                        value={data.max_prix}
                        onChange={changeHandler}
                        placeholder="Prix max..."
                    />
                </div>
            </div>

            <div
                className="mt-6"
                style={{ display: status() ? "none" : "block" }}
                hidden={status()}
            >
                <button onClick={resetFilters}>
                    <DangerButton>X</DangerButton>
                </button>
            </div>
        </div>
    );
}

export default FilterProduit;
