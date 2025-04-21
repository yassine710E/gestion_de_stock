import React from 'react'

function CardCategory({produit}) {
  return (
    <div className="flex items-start justify-between border-b pb-4 group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 ">
      {/* Product Image */}
      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden ">
        <img
          src={`/storage/${produit.photo}`}
          alt="Artwork Tee"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-medium text-gray-900">{produit.nom_produit}</h2>
        <p className="text-gray-500 text-sm">{produit.code_barre}</p>

        {/* Stock Status */}
        <div className="flex items-center mt-2 text-green-600 text-sm">
          <i className="fas fa-check-circle mr-1"></i>
          <span>In stock</span>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end">
        <p className="text-lg font-medium text-green-600">{produit.prix_vente} $</p>
        <div className="flex gap-4">

           
          
        </div>
      </div>
    </div>
  )
}

export default CardCategory
