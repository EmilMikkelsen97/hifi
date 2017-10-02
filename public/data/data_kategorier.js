// ========================================================


// Denne funktion returnerer et JSON array indholdende kategorier.
// Den bruges udelukkende til at holde eksemplet simpelt
// og uafhængigt af API'er, databaser, osv.

function statisk_kategorier_data ()
{
	return [
		{ "kategori_navn": "Hi-Fi Klubben" },
		{ "kategori_id": 1, "kategori_navn": "Forside" },
		{ "kategori_id": 2, "kategori_navn": "Produkter" },
		{ "kategori_id": 3, "kategori_navn": "Kontakt" }
	];
}


// ========================================================