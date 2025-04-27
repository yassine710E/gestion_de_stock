import React from "react";
import TextInput from "@/Components/TextInput";
import DangerButton from "@/Components/DangerButton";

const SearchCategory = ({ data, changeHandler, resetFilters, status }) => {
    return (
        <div className="p-6 text-gray-900 my-3 bg-white rounded-md ">
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="search"
                    className="text-xl font-bold"
                >
                    Search Categories
                </label>
                <div className="flex gap-4 items-center">
                    <TextInput
                        id="search"
                        type="text"
                        name="search"
                        value={data.search}
                        onChange={changeHandler}
                        className="block w-full"
                        placeholder="Enter Category Name..."
                    />
                    <div hidden={status()}>
                        <button onClick={resetFilters}>
                            <DangerButton>Clear</DangerButton>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCategory;
