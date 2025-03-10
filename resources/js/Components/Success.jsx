import React from 'react'

function Success({ flash }) {
    return (


        <div className="mb-4 px-4 py-3 bg-green-100 border  border-green-400 text-green-700 rounded relative" role="alert">
            <span className="block sm:inline">{flash.success}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <i className="fas fa-check"></i>
            </span>
        </div>


    )
}

export default Success
