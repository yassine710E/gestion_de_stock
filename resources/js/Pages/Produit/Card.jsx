// import { CheckCircle } from "lucide-react";

import { useForm } from "@inertiajs/react";

const Card = ({produit}) => {

  const {delete : destroy} = useForm()

  const Delete = (e, id) => {
    e.preventDefault()
    if(confirm("are you sure")){
      destroy(route("produits.destroy", id))
    }
  }
  return (
    <div className="flex items-start justify-between border-b pb-4">
      {/* Product Image */}
      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={`storage/${produit.photo}`}
          alt="Artwork Tee"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-medium text-gray-900">{produit.nom_produit}</h2>
        <p className="text-gray-500 text-sm">{produit.category.nom_cat}</p>
        <p className="text-gray-500 text-sm">{produit.code_barre}</p>

        {/* Stock Status */}
        <div className="flex items-center mt-2 text-green-600 text-sm">
          <i className="fas fa-check-circle mr-1"></i>
          <span>In stock</span>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="flex flex-col items-end">
        <p className="text-lg font-medium text-gray-900">{produit.prix_p} $</p>
        <div className="flex gap-4">
          <form onSubmit={(e) => Delete(e, produit.id)}>
            <button type="submit" className="text-red-600 text-sm mt-2 hover:underline">
              <i className="fas fa-trash mr-1"></i>
            </button>
          </form>
          <button className="text-blue-600 text-sm mt-2 hover:underline">
            <i className="fas fa-edit mr-1"></i>
            
          </button>
          <button className="text-green-600 text-sm mt-2 hover:underline">
            <i className="fas fa-info-circle mr-1"></i>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
