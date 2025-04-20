import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

function ClientCard({ client ,handleDelete }) {
    return (
        <div
            key={client.id}
            // onClick={() => navigateToDetails(client.id)}
            className="group col-span-2 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 cursor-pointer"
        >
            {/* Client Information */}
            <div className="mt-4 space-y-2">
                {/* Client Name */}
                <div className="flex justify-center items-center">
                    <p className="text-xl font-bold text-indigo-600">
                        {client.nom} {client.prenom}
                    </p>
                </div>
                <div className="flex items-center space-x-2 py-3">
                    <span className="px-2 py-1 text-s font-semibold bg-gray-100 text-gray-600 rounded-full">
                        Email:
                    </span>
                    <span className="text-s text-gray-500 font-bold">
                        {client.email}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 text-sm font-semibold bg-gray-100 text-gray-600 rounded-full">
                        Téléphone:
                    </span>
                    <span className="text-s text-gray-500 font-bold">
                        {client.telephone}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-2">
                    <Link
                        className="text-green-600 hover:text-green-900 p-2 hover:bg-green-100 rounded-full transition duration-150"
                        href={route("clients.show", client.id)}
                    >
                        <i className="fas fa-eye"></i>
                    </Link>
                    {/* Edit Button */}
                    <Link
                        className="text-blue-600 hover:text-blue-900 p-2 hover:bg-blue-100 rounded-full transition duration-150"
                        href={route("clients.edit", client.id)}
                    >
                        <i className="fas fa-edit"></i>
                    </Link>

                    {/* Delete Button */}
                    <form
                        onSubmit={(e) => {
                            
                            handleDelete(e, client.id);
                        }}
                    >
                        <button
                            type="submit"
                            className="p-2 text-red-600 hover:text-red-800"
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ClientCard;
