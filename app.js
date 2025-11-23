const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


let cartCount = 0;
const cartCountEl = document.getElementById("cartCount");

function addToCart() {
  cartCount++;
  cartCountEl.innerText = cartCount;
}

document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', addToCart);
});
