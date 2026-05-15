
// =========================
// HEADER LOAD
// =========================
fetch("header.html")
.then(res => res.text())
.then(data => {
  document.getElementById("header").innerHTML = data;
});


// =========================
// FOOTER LOAD
// =========================
fetch("footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});


// =========================
// PRODUCTS FROM LOCALSTORAGE
// =========================
let products = JSON.parse(localStorage.getItem("products") || "[]");


// =========================
// LOAD PRODUCTS FUNCTION
// =========================
function loadProducts(){

  let html = "";

  products.forEach(p => {
    html += `
      <div class="card">
        <img src="${p.image}" style="width:100%">
        <h3>${p.title}</h3>
        <p>${p.price}</p>
        <a href="${p.link}" target="_blank">Buy Now</a>
      </div>
    `;
  });

  document.getElementById("productGrid").innerHTML = html;
}


// =========================
// SEARCH FUNCTION
// =========================
function searchProduct(value){

  let cards = document.querySelectorAll(".card");

  cards.forEach(c => {
    c.style.display =
      c.innerText.toLowerCase().includes(value.toLowerCase())
      ? "block"
      : "none";
  });
}


// =========================
// AUTO RUN
// =========================
loadProducts();
