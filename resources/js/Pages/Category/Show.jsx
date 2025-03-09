import React from 'react'
import Card from '../Produit/Card'

function Show({category}) {
    console.log(category);
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                {category.nom_cat}
            </h1>
            
            <div className="bg-white shadow-md rounded-lg p-6">

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Products</h2>
                    {category.produits && category.produits.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.produits.map((produit) => (
 
                  <div></div>  
                          
            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No products found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Show
