<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/fontawesome.min.css" rel="stylesheet">


<style>
    body {
        font-family: 'Poppins', sans-serif;
        margin: 30px;
        font-size: 14px;
        color: #2c3e50;
        background-color: #f9f9f9;
    }
    h1, h3 {
        text-align: center;
        color: #34495e;
    }
    .info {
        margin-bottom: 20px;
        padding: 15px;
        background-color: #ecf0f1;
        border-radius: 8px;
    }
    p {
        margin: 5px 0;
    }
    p i {
        margin-right: 5px;
        color: #3498db;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.05);
    }
    table th, table td {
        padding: 12px;
        border-bottom: 1px solid #ddd;
    }
    table thead {
        background-color: #3498db;
        color: white;
    }
    table tbody tr:hover {
        background-color: #f1f1f1;
    }
    .total {
        text-align: right;
        margin-top: 20px;
        font-size: 16px;
        font-weight: bold;
    }
    .footer {
        text-align: center;
        margin-top: 40px;
        font-size: 12px;
        color: #7f8c8d;
    }
</style>

<h1>Bon de Livraison</h1>

<div class="info">
    <p><i class="fas fa-user"></i><strong>Fournisseur:</strong> {{ $fournisseur->nom_complet }}</p>
    <p><i class="fas fa-envelope"></i><strong>Email:</strong> {{ $fournisseur->email }}</p>
    <p><i class="fas fa-phone"></i><strong>Téléphone:</strong> {{ $fournisseur->telephone }}</p>
    <p><i class="fas fa-map-marker-alt"></i><strong>Adresse:</strong> {{ $fournisseur->address }}</p>
    <p><i class="fas fa-calendar-alt"></i><strong>Date Livraison:</strong> {{ $command->date_livraison }}</p>
</div>

<h3>Produits</h3>

<table>
    <thead>
        <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Prix Unitaire</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        @foreach($products as $product)
        <tr>
            <td>{{ $product->nom_produit }}</td>
            <td>{{ $product->quantite }}</td>
            <td>{{ number_format($product->prix_vente, 2) }} $</td>
            <td>{{ number_format($product->quantite * $product->prix_vente, 2) }} $</td>
        </tr>
        @endforeach
    </tbody>
</table>

<p class="total"><i class="fas fa-money-bill-wave"></i> Total Commande: {{ number_format($command->total, 2) }} $</p>

<div class="footer">
    &copy; {{ date('Y') }} Votre Société - Tous droits réservés.
</div>
