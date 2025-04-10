<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProduitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "nom_produit" => "required|min:4|max:255",
            "category_id" => "required|exists:categories,id",
            "prix_vente" => "required|numeric|min:0.5",
            "min_stock"=>"required|integer|max:20|min:10",
            "max_stock"=>"required|integer|max:1000|min:900",
            "code_barre" => ['required', Rule::unique('produits')->ignore($this->produit->id)],
            "localisation"=>"required|string",
        ];
    }
}
