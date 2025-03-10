import React from 'react'

function Error({flash}) {
    return (
        <div className="mb-4 px-4 py-3 bg-red-100 border  border-red-400 text-red-700 rounded relative" role="alert">
            <span className="block sm:inline">{flash.error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <i className="fas fa-times"></i>
            </span>
        </div>
    )
}

export default Error
