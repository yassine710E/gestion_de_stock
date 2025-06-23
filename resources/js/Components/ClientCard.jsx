import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@inertiajs/react";

function ClientCard({ client ,handleDelete }) {
    return (
        <div
            key={client.id}
            // onClick={() => navigateToDetails(client.id)}
            className="group col-span-2 bg-white rounded-lg border hover:shadow-md transition-shadow duration-300 p-4 cursor-pointer"
        >
            {/* Client Information */}
            <div className="">
                {/* Client Name */}
                <div className="flex justify-center items-center bg-gray-100 py-4 rounded-lg">
                    <p className="text-xl font-bold text-black">
                        {client.nom} {client.prenom}
                    </p>
                </div>
                <div className="flex items-center space-x-2 py-3">
                    <span className="px-14 py-1 text-s font-semibold bg-gray-100 text-gray-600 rounded-md">
                        Email:
                    </span>
                    <span className="text-s text-gray-500 font-bold">
                        {client.email}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="px-14 py-1 text-s font-semibold bg-gray-100 text-gray-600 rounded-md">
                        Téléphone:
                    </span>
                    <span className="text-s text-gray-500 font-bold">
                        {client.telephone}
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 ">
                    <Link
                        className="text-green-600 rounded-full transition duration-150"
                        href={route("clients.show", client.id)}
                    >
                        <i className="fas fa-eye"></i>
                    </Link>
                    {/* Edit Button */}
                    <Link
                        className="text-blue-600 rounded-full transition duration-150"
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
                            className="text-red-600"
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
