// https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
       results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
 }
 
 // slet funktionen, bindes til hver slet knap efter alle produkterne er hentet
 function sletItem(event) {
    if (confirm('Er du sikker?')) {
       let id = (isNaN(event.target.dataset['id']) ? 0 : event.target.dataset['id']);
 
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
 
       let init = {
          method: 'delete',
          headers: headers,
          cache: 'no-cache'
       };
       let request = new Request(`http://localhost:1337/products/${id}`, init);
 
       fetch(request)
          .then(response => {
             if (response.status == 204) {
                window.location.replace(`admin.html`);
             } else {
                throw new Error('Produkt blev ikke slettet');
             }
          }).catch(err => {
             console.log(err);
          });
    }
 }
 
 document.addEventListener("DOMContentLoaded", event => {
 
    // forudfyld formular hvis der skal redigeres
    if (getParameterByName('action') == "edit") {
       let productId = (getParameterByName('id') != null ? getParameterByName('id') : 0);
 
       fetch(`http://localhost:1337/products/${productId}`)
          .then((response) => {
             if (response.ok) {
                return response.json();
             }
          })
          .then((json) => {
 
             // erstat punktum med komma
             let price = json[0].pris;
            //  var pris = price.replace('.', ',');
 
             document.querySelector('#productForm').innerHTML = `
                <h2>Rediger produkt</h2>
                <label>id</label>
                <input type="text" name="productId" id="productId" value="${json[0].id}">
                <br>
                <label>navn</label>
                <input type="text" name="productName" id="productName" value="${json[0].navn}">
                <br>
                <label>pris</label>
                <input type="text" name="productPrice" id="productPrice" value="${json[0].pris}">
                <br>
                <label>beskrivelse</label>
                <input type="text" name="productDescription" id="productDescription" value="${json[0].beskrivelse}">
                <br>
                <label>billede</label>
                <input type="text" name="productImage" id="productImage" value="${json[0].billede}">
                <br>
                <label>varenr</label>
                <input type="text" name="productNumber" id="productNumber" value="${json[0].varenr}">
                <br>
                <label>fk_type</label>
                <select id="productType" name="productType" value="">
                  <option value="">Vælg type</option>
                  <option value="1">cdafspillere</option>
                  <option value="2">dvdafspillere</option>
                  <option value="3">effektforstærkere</option>
                  <option value="4">forstærkere</option>
                  <option value="5">højtalere</option>
                  <option value="6">intforstærkere</option>
                  <option value="7">pladespillere</option>
                  <option value="8">rørforstærkere</option>
                </select>>
                <br>    
                <button>Gem</button>
                <a href="index.html" class="button">Annuller</a> <span id="productsFormError" class="error"></span>
                <hr>`;
 
             let productFormButton = document.querySelector("#productForm button");
 
             productFormButton.addEventListener('click', function (event) {
                let name = document.querySelector('#productName').value;
                let description = document.querySelector('#productDescription').value;
                let price = document.querySelector('#productPrice').value;
                let image = document.querySelector('#productImage').value;
                let number = document.querySelector('#productNumber').value;
                let type = document.querySelector('#productType').value;
                let id = (getParameterByName('id') != null ? getParameterByName('id') : 0);
 
                // erstat komma med punkt, så isNaN funktionen fungerer hensigtsmæssigt
                price = price.replace(',', '.');
 
                if (id != 0 && name != '' && description != '' && !isNaN(price) && id > 0 && image != '' && !isNaN(number) && !isNaN(type)) {
                   document.querySelector('#productsFormError').innerHTML = "";
                   let url = `http://localhost:1337/products/${id}`;
                   let headers = new Headers();
                   headers.append('Content-Type', 'application/json');
 
                   let init = {
                      method: 'put',
                      headers: headers,
                      body: JSON.stringify({
                        id: id,
                        name: name,
                        price: price,
                        description: description,
                        image: image,
                        number: number,
                        type: type
                      }),
                      cache: 'no-cache',
                      cors: 'cors'
                   };
                   let request = new Request(url, init);
 
                   fetch(request)
                      .then(response => {
 
                         if (response.status == 200) {
                            window.location.reload();
                         } else {
                            throw new Error('Produkt blev ikke opdateret')
                         }
                      }).catch(err => {
                         console.log(err);
                      });
 
                } else {
                   document.querySelector('#productsFormError').innerHTML = "Udfyld venligst alle felter korrekt";
                }
             });
          })
          .catch((err) => {
             console.log(err);
          });
 
    } else {
       // vis tom formular til oprettelse af et produkt
       document.querySelector('#productForm').innerHTML = `
          <h2>Tilføj nyt produkt</h2>
          <label>id</label>
          <input type="text" name="productId" id="productId" value="">
          <br>
          <label>navn</label>
          <input type="text" name="productName" id="productName" value="">
          <br>
          <label>pris</label>
          <input type="text" name="productPrice" id="productPrice" value="">
          <br>
          <label>beskrivelse</label>
          <input type="text" name="productDescription" id="productDescription" value="">
          <br>
          <label>billede</label>
          <input type="text" name="productImage" id="productImage" value="">
          <br>
          <label>varenr</label>
          <input type="text" name="productNumber" id="productNumber" value="">
          <br>
          <label>fk_type</label>
          <select id="productType" name="productType" value="">
            <option value="">Vælg type</option>
            <option value="1">cdafspillere</option>
            <option value="2">dvdafspillere</option>
            <option value="3">effektforstærkere</option>
            <option value="4">forstærkere</option>
            <option value="5">højtalere</option>
            <option value="6">intforstærkere</option>
            <option value="7">pladespillere</option>
            <option value="8">rørforstærkere</option>
          </select>
          <br>
          <button>Gem</button>
          <a href="index.html" class="button">Annuller</a> <span id="productsFormError" class="error"></span>
          <hr>`;
 
 
       // bind gem funktionen til knappen
       let productFormButton = document.querySelector("#productForm button");
       productFormButton.addEventListener('click', function (event) {
          let id = document.querySelector('#productId').value;
          let name = document.querySelector('#productName').value;
          let price = document.querySelector('#productPrice').value;
          let description = document.querySelector('#productDescription').value;
          let image = document.querySelector('#productImage').value;
          let number = document.querySelector('#productNumber').value;
          let type = document.querySelector('#productType').value;
 
          // erstat komma med punkt, så isNaN funktionen fungerer hensigtsmæssigt
          price = price.replace(',', '.');
 
          if (id != '' && name != '' && price != '' && description != '' && image != '' && number != '' && type != '') {
             document.querySelector('#productsFormError').innerHTML = "";
             let url = `http://localhost:1337/products/`;
             let headers = new Headers();
             headers.append('Content-Type', 'application/json');
 
             let init = {
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                  id: id,
                  name: name,
                  price: price,
                  description: description,
                  image: image,
                  number: number,
                  type: type
                }),
                cache: 'no-cache'
             };
             let request = new Request(url, init);
 
             fetch(request)
                .then(response => {
                   // hvis gem handlingen gik fejlfrit igennem, reloades siden
                   if (response.status == 200) {
                      window.location.replace(`admin.html`);
                   } else {
                      throw new Error('Produkt blev ikke oprettet');
                   }
                })
                .catch(err => {
                   console.log(err);
                });
          } else {
             document.querySelector('#productsFormError').innerHTML = "Udfyld venligst alle felter korrekt";
          }
       });
    }
    
// Liste med alle produkter hvor jeg kan trykke ret eller slet
    fetch('http://localhost:1337/products')
    .then((response) => {
        // grib svarets indhold (body) og send det som et json objekt til næste .then()
        return response.json();
    })
    .then((data) => {
        // nu er json objektet lagt ind i data variablen, udskriv data
        console.log(data);
        // document.getElementById('content').innerHTML = data[0].billede + data[0].navn + ", " + data[0].pris + "kr.";
        data.forEach(function (data) {
            document.getElementById('productsList').innerHTML += `
            <div class="row">
                <a href="?action=edit&id=${data.id}" class="button delete">ret</a>
                <a href="#" class="button delete" data-id="${data.id}">slet</a>
                <p style="width:180px;">${data.navn}</p>
                <p style="width:80px;">${data.pris}</p>
                <p style="width:100px">${data.varenr}</p>
                <p>${data.fk_type}</p>
            </div>`;
        });
        // lokaliser alle slet knapper, og tilføj en slet funktion
        let deleteButtons = document.querySelectorAll('#productsList a.delete');
        deleteButtons.forEach((button) => {
            button.addEventListener('click', sletItem);
        })
    })
      //    price = price.replace('.', ',');
 });