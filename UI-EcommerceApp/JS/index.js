const container = document.querySelector(".container")
const loader = document.querySelector("div.loader")
container.style.display = 'none'
setTimeout(() => {
    loader.style.display = "none"
    container.style.display = "block"
}, 2000);

const userRegisterLocalStorage = JSON.parse(localStorage.getItem("userRegister"))
const buttonLogout = document.querySelector(".user button")
const p = document.querySelector("p.username")

p.innerHTML = userRegisterLocalStorage?.name

buttonLogout.addEventListener("click",() => {
   localStorage.removeItem("userRegister")
   window.location.href = "register.html"
})

if(userRegisterLocalStorage == undefined) {
    window.location.href = "register.html"
}

//slider

let slides = document.querySelectorAll('.slide-container')
let index = 0

function next (){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev (){
    slides[index].classList.remove('active')
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

//show sidebar

//c1:

// const navbar = document.querySelector('.navbar')
// const inconMenuBar = document.querySelector('#menu-bar')

// const iconBar = document.querySelector(".fa-bars") 
// const iconClose = document.querySelector(".fa-times") 

// iconClose.style.display = 'none'

// inconMenuBar.addEventListener('click',() => {
//     navbar.style.left = "0"
//     iconBar.style.display = 'none'
//     iconClose.style.display = 'block'
// })

// iconClose.addEventListener('click',() => {
//     navbar.style.left = "-120%"
//     iconBar.style.display = 'block'
//     iconClose.style.display = 'none'
// })

//C2:
const navbar = document.querySelector('.navbar')
const icon = document.querySelector('#menu-bar')

icon.addEventListener('click',() => {
    icon.classList.toggle("fa-times")
    navbar.classList.toggle("active")
})


const options = {
  method : "GET",
  headers :{"Content-Type": "application/json"},
}

fetch('https://fakestoreapi.com/products', options)
  .then(response => response.json())
  .then(products => {
    renderProducts(products);
  })


function renderProducts(products) {
    const productCarts = document.querySelectorAll('.slide');
   
  products.forEach((product, index) => {
    const productCart = productCarts[index];

    productCart.innerHTML = `
      <div class="content">
        <span>${product.category}</span>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <a href="#" class="btn" onclick="addToCart(${product.id})">add to cart</a>
      </div>
      <div class="image">
        <img src="${product.image}" class="shoe" alt="shoe" />
      </div>`;
  });
}


fetch('https://fakestoreapi.com/products', options)
  .then(response => response.json())
  .then(products => {
    renderProduct(products);
  })
 

  function renderProduct(products) {
    const productCarts = document.querySelectorAll('.box .content');
   
  products.forEach((product, index) => {
    const productCart = productCarts[index];

    productCart.innerHTML = `
    <img src="${product.image}" alt="" />
    <h3>${product.title}</h3>
    <div class="price">${product.price}$</div>
    <div class="stars">
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
    </div>`;
  });
}


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    render(products);
  })

function render(products) {
  const productCarts = document.querySelectorAll('.icons');
   
  products.forEach((product, index) => {
    const productCart = productCarts[index];

    productCart.innerHTML = `
    <a href="#" class="fa-solid fa-cart-plus" onclick="addToCart(${product.id})"></a>
    <a href="#" class="fa fa-share"></a>
    <a href="#" class="fa fa-eye"></a>
    `;
  });
}

function addToCart(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(productDetail => {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      cartItems.push(productDetail);

      localStorage.setItem('cart', JSON.stringify(cartItems));
      
      updateCartIcon();
    })
}

window.onload = function() {
  updateCartIcon();
};

function updateCartIcon() {
  const cartIcon = document.getElementById('cart-icon');
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartIcon.textContent = cartItems.length.toString();
}

