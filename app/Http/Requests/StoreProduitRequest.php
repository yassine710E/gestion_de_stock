<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProduitRequest extends FormRequest
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
            
                "nom_produit" => "required|min:4|max:25",
                "category_id" => "required|exists:categories,id",
                "prix_p" => "required|numeric|min:0",
                "photo" => "required|image|mimes:jpeg,png,jpg|max:2048",
                "code_barre" => "required|unique:produits,code_barre|string"
            
        ];
    }
}
