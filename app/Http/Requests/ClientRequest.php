<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ClientRequest extends FormRequest
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
          if ($this->isMethod("post")) {
            return [
                'nom' => ['required','string', 'min:3', 'max:30'],
                'prenom' => ['required', 'string', 'min:3', 'max:30'],
                'age' => ['required', 'integer', 'min:18'],
                'adresse' => ['required', 'string', 'min:5', 'max:255'],
                'telephone' => ['required', 'regex:/^(?:\+212|06)[\s-]?\d{8}$/','unique:clients,telephone'],
                'fax' => ['nullable', 'regex:/^(?:\+2125|05)[\s-]?\d{8}$/'],
                'societe' => ['required', 'string', 'max:100'],
                'email' => ['required', 'email', 'max:255','unique:clients,email'],
            ];
          }

          return [
            'nom' => ['required','string', 'min:3', 'max:30'],
            'prenom' => ['required', 'string', 'min:3', 'max:30'],
            'age' => ['required', 'integer', 'min:18'],
            'adresse' => ['required', 'string', 'min:5', 'max:255'],
            'telephone' => ['required', 'regex:/^(?:\+212|06)[\s-]?\d{8}$/',Rule::unique("clients","telephone")->ignore($this->client->id)],
            'fax' => ['nullable', 'regex:/^(?:\+2125|05)[\s-]?\d{8}$/'],
            'societe' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255',Rule::unique("clients","email")->ignore($this->client->id)],
        ];
    }
}
