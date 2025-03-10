import React from 'react'

function Info({flash}) {
  return (
    <div className="mb-4 px-4 py-3 bg-blue-100 border  border-blue-400 text-blue-700 rounded relative" role="alert">
    <span className="block sm:inline">{flash.info}</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <i className="fas fa-info-circle"></i>
    </span>
</div>
  )
}

export default Info
