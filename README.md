# config/sql.js

Den fil finder ud af hvilken database den skal request fra.

# data/produkt.js

Det er dataen på alle mine produkter.

# routes/index.js

ingen ting?

# routes/produkt.js

Den viser hvad du skal skrive i din url for at se dine produkter i et json udtræk.

# scripts/produkt.js

ingen ting?

# services/produkt.js

Den henter alle produkter fra data/produkt.js

# app.js

Der står hvilket projekt det er, hvilken version det er og hvilken port den køre på.

# public/css/simple-sidebar.css

Det er css til sidebar.

# public/css/CustomStyleSheet.css

Det er css som jeg selv har skrevet.

# public/css/business-casual.css

Det er css fra bootstrap.

# public/data/data_kategorier.js

Det er den dynamiske menu.

# public/img

Billeder.

# public/js/form.js

Det er validering til kontakt formularen.

# public/js/funktioner.js

Godt spørgsmål.

# public/js/menu.js

Pas.

# public/js/produkter.js

Aner det ikke.

# public/vendor

Det er hovedmappen med massere af bootstrap

# Midlertidig løsning på en løkke

```
var i = 0;
while ([i] < 4) {
document.getElementById('content').innerHTML += `
    <div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
            <a href="./rick.html"><img class="card-img-top" src="${data[i].billede}" alt="Billede af ${data[i].navn}"></a>
            <div class="card-body">
                <h4 class="card-title">
                    <a href="./rick.html">${data[i].navn}</a>
                </h4>
                <h5>${data[i].pris},-</h5>
                <p class="card-text">${data[i].beskrivelse}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
    </div>`;
i++;
}
```
Har lavet den her midlertidige løsning indtil jeg får min forEach til at virke

# løsning til forEach
```
data.forEach(function (data) {
document.getElementById('content').innerHTML += `
    <div class="col-lg-3 col-md-6 mb-4 filterDiv hojtalere">
        <div class="card h-100">
            <a href="./rick.html"><img class="card-img-top" src="${data.billede}" alt="Billede af ${data.navn}"></a>
            <div class="card-body">
                <h4 class="card-title">
                    <a href="./rick.html">${data.navn}</a>
                </h4>
                <h5>${data.pris},-</h5>
                <p class="card-text">${data.beskrivelse}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
            </div>
        </div>
    </div>`;
});
```

# kravspecifiktation
adminpanel, tilføje, redigere og fjerne et produkt <br>
Lav et login system