/* HEADER LOAD */
fetch("header.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("header").innerHTML=data;
});

/* FOOTER LOAD */
fetch("footer.html")
.then(res=>res.text())
.then(data=>{
  document.getElementById("footer").innerHTML=data;
});

/* PRODUCT LOAD */
function loadProducts(){
  let html="";

  products.forEach(p=>{
    html+=`
      <div class="card">
        <img src="${p.image}" style="width:100%">
        <h3>${p.title}</h3>
        <p>${p.price}</p>
        <a href="${p.link}" target="_blank">Buy</a>
      </div>
    `;
  });

  document.getElementById("productGrid").innerHTML=html;
}
