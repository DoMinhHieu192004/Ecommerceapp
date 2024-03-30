const myProduct = document.querySelector('.box-container');
const info = localStorage.getItem('cart');
const container = document.querySelector(".container")
const loader = document.querySelector("div.loader")

container.style.display = 'none'
setTimeout(() => {
    loader.style.display = "none"
    container.style.display = "flex"
}, 2000);


const cartArray = JSON.parse(info);

cartArray.forEach((product) => {
    const products = document.createElement('div');
    products.classList.add('box');
    products.innerHTML = `
    <div class="icons">
    <a href="#" class="fa-solid fa-money-check-dollar"></a>
    <a href="#" class="fa-solid fa-xmark"></a>
  </div>
  <div class="content">
  <img src="${product.image}" alt="" />
  <h3>${product.title}</h3>
  <div class="price">${product.price}$</div>
  <div class="stars">
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
    <i class="fa fa-star"></i>
  </div>
    </div>`;

    myProduct.appendChild(products);

    const removeButton = products.querySelector('.fa-xmark');
    removeButton.addEventListener('click', function (event) {
        event.preventDefault();

        const index = cartArray.findIndex(cartProduct => cartProduct.title === product.title);
        if (index !== -1) {
            cartArray.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartArray));
            myProduct.removeChild(products);
        }
    });
});





