<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StockRequest extends FormRequest
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
            'produit_id'=>['required',"exists:produits,id"],
            "stock_quantite"=>['required','integer'],
            "prix_stock" => ['required', 'numeric', 'regex:/^\d{1,6}(\.\d{1,2})?$/'],
        ];
    }
}
