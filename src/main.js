import './main.scss';
import menu from './menu.json';
import './assets/fonts/Marcheile-Bold-Condensed.woff';
import './assets/fonts/Marcheile-Bold-Condensed.woff2';
/* DO NOT EDIT ABOVE THIS LINE. You can start editing here. */

/**
 * === CODE HINT ===
 * You can write your own js code here, also you can import other files.
 * If you want to split your code into multiple files, then import them here this way:
 * import ./path/to/your/file.js
 *
 */

let placeholder = document.querySelector("#output")
let out = ""

for(let product of menu.menuList){
    out +=`
        <div class="menu-item">
            <img src="${product.image}" width="100%">
            <div class="menu-price">
                <h4>${product.menuName}</h4>
                <h4 class="color-orange">$${product.menuPrice}</h4>
            </div>
                <p style="margin-bottom: 20px">${product.menuDescription}</p>
                ${product.menuDiscount ? 
                    `<span class="discount">Discount this month of 20% $${product.menuDiscount}</span>`
                    : ''
                }
            <div class="d-flex">
                <p>Quantity:</p>
                <input type="text" value="0" id="value${product.menuId}" onchange="calculateValue(${product.menuId})">
                <p class="total">Total: <span id="total${product.menuId}">$0</span></p>
            </div>
        </div>
    `
}
placeholder.innerHTML = out

//header function
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName("header")[0].classList.add(className);
  } else {
    document.getElementsByClassName("header")[0].classList.remove(className);
  }
};
