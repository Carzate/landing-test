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
let out = "";

for(let product of menu.menuList){
    out +=`
        <div class="menu-item">
            <img src="${product.image}" width="100%">
            <div class="menu-price">
                <h4>${product.menuName}</h4>
                <h4 class="color-orange">$${product.menuPrice}</h4>
            </div>
            <p style="width:100%">${product.menuDescription}</p>
        </div>
    `
}
placeholder.innerHTML = out

