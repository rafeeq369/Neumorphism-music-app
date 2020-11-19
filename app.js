
// const products = [
//     {
//         img: 'https://images.unsplash.com/photo-1474625342403-1b8a2c0f7215?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
//         prise: 55,
//         flavor: 'stawberry cupcake',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1426869884541-df7117556757?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//         prise: 50,
//         flavor: 'chaco cupcake',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1455731657401-43502b7c1ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//         prise: 53,
//         flavor: 'vennila cupcake',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
//         prise: 63,
//         flavor: 'butter cupcake',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//         prise: 65,
//         flavor: 'butter cheesh cupcake',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1569429379053-761000e13c17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
//         prise: 45,
//         flavor: 'plain cupcake',
//     }
// ]

// const productSec = document.querySelector('.products')

// for(let i = 0;i < products.length; i++){
//     let div = document.createElement('div');
//     div.innerHTML = 
//         `<div class="product">
//             <img src="${products[i].img}"></img>
//             <h3>${products[i].flavor} Candy</h3>
//             <h4>Rs: ${products[i].prise}</h4>
//             <button class="add-cart">Add To Cart</button>
//         </div>`;
//     productSec.appendChild(div);
// }
// const addCartBtns = document.querySelectorAll(' .add-cart')
// for(cart of addCartBtns){
//     cart.addEventListener('click', (el) => {
//         // console.log(el);
//         const img = el.path[1].firstElementChild
//         const name = el.path[1].firstElementChild.nextElementSibling
//         const price = el.path[1].firstElementChild.nextElementSibling.nextElementSibling
//         console.log(price);
//         console.log(img);

//         const bag = document.createElement('div');
//         bag.innerHTML = `<div class="cart-bx"><img src="${img.src}" class="cart-img"> <h3>${name.innerText}</h3> <h4>${price.innerText}</h4></div>`;
//         const cartClass = document.querySelector('.cart');
//         cartClass.appendChild(bag);
//     })
// }