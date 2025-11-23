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


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Show SweetAlert2 popup
  Swal.fire({
    icon: 'success',
    title: 'Message Sent!',
    text: '✅ Your message has been sent successfully!',
    confirmButtonColor: '#ec4899', // pink to match your theme
    timer: 2500,
    timerProgressBar: true
  });

  contactForm.reset(); // reset form fields
});
