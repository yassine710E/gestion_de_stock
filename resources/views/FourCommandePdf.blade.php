<h1>Bon de laivraison</h1>

<p><strong>fournisseur:</strong> {{ $fournisseur->nom_complet }}</p>
<p><strong>Email:</strong> {{ $fournisseur->email }}</p>
<p><strong>Téléphone:</strong> {{ $fournisseur->telephone }}</p>
<p><strong>address:</strong> {{ $fournisseur->address }}</p>

<p><strong>Date Livraison:</strong> {{ $command->date_livraison }}</p>

<h3>Produits:</h3>
<table width="100%" border="1" cellspacing="0" cellpadding="5">
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

<p><strong>Total Commande:</strong> {{ number_format($command->total, 2) }} $</p>
