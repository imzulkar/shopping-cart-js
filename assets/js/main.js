// quantity increment/decrement funtion
// let inc = document.querySelectorAll('#increase')
// let dec = document.querySelectorAll('#decrease')

// /*==========Increment function==========*/
// inc.forEach((v, i) => {
//     v.addEventListener('click', (ev) => {
//         let btn = ev.target.textContent
//         let value = parseInt(ev.target.previousSibling.previousElementSibling.value)
//         value = isNaN(value) ? 0 : value;
//         value++;
//         document.querySelectorAll('#number')[i].value = value;
//         console.log(value);
//     })

// })
// /*==========Decrement function==========*/
// dec.forEach((v, i) => {
//     v.addEventListener('click', (ev) => {
//         let btn = ev.target.textContent
//         let value = parseInt(ev.target.nextSibling.nextElementSibling.value)
//         value = isNaN(value) ? 0 : value;
//         value--;
//         document.querySelectorAll('#number')[i].value = value;
//         console.log(value);
//     })

// })





/*==========Set Element==========*/
let productList = document.getElementById('list_of_cart_product')


productList.addEventListener('click', incDecTarget)


function incDecTarget(e) {
    let product = new AddToCart();
    product.setIncDecValue(e.target);
    e.preventDefault();

}




/*==========Add product ==========*/
// class Product {
//     constructor(product_img, product_name, product_price, product_quantity) {
//         this.product_img = product_img
//         this.product_price = product_price
//         this.product_name = product_name
//         this.product_quantity = product_quantity

//     }


// }

class AddToCart {
    constructor() { }


    updateProduct(product_img, product_name, product_price, product_quantity) {

        let tr = document.createElement('tr');
        tr.className = "text-center item";
        tr.innerHTML = `
        <th scope="row">1</th>
        <td><img src="${product_img}" class="display_table_image" alt="..."></td>
        <td>${product_name}</td>
        <td>${product_price}</td>
        <td>
            <form>
                <div class="value-button" id="decrease" value="Decrease Value">-</div>

                <input type="number" id="number" value="${product_quantity}" />
                <div class="value-button" id="increase" value="Increase Value">+</div>

            </form>
        </td>
        <td>${product_price}</td>
        <td><a href="#"><i class="uil uil-times remove_item_icon"></i></a></td>
        `

        productList.appendChild(tr)


        // // quantity increment/decrement funtion
        // let inc = document.querySelectorAll('#increase')
        // let dec = document.querySelectorAll('#decrease')

        // /*==========Increment function==========*/
        // inc.forEach((v, i) => {
        //     v.addEventListener('click', (ev) => {

        //         let value = ev.target
        //         console.log(value);
        //         // if (value !== 1) {
        //         //     value = (value + 1) - value
        //         // }

        //         console.log(value);
        //         value = isNaN(value) ? 0 : value;
        //         value++;
        //         document.querySelectorAll('#number')[i].value = value;
        //         // console.log(value);
        //     })


        // })
        // /*==========Decrement function==========*/
        // dec.forEach((v, i) => {
        //     v.addEventListener('click', (ev) => {

        //         // let value = parseInt(ev.target.nextSibling.nextElementSibling.value, 10)
        //         let value = document.getElementById('number')
        //         value = isNaN(value) ? 0 : value;
        //         value < 1 ? value = 1 : '';
        //         value--;
        //         document.querySelectorAll('#number')[i].value = value;
        //         // console.log(data);
        //     })

        // })


    }



    setIncDecValue(target) {
        if (target.hasAttribute('value')) {
            // console.log(target.id);
            let value;
            if (target.id == 'increase') {
                value = target.previousElementSibling.value
                value++
                // console.log(value);
            }

            else if (target.id == 'decrease') {
                value = target.nextElementSibling.value
                value--
                // console.log(value);

            }
            target.parentElement.childNodes[3].value = value;

            let proPrice = parseInt(target.parentElement.parentElement.parentElement.childNodes[7].textContent);
            let unitPrice = value * proPrice
            console.log(target.parentElement.parentElement.parentElement.childNodes[11].textContent = unitPrice);
        }
    }

}


/*==========Get product Value ==========*/
let addToCart = document.querySelectorAll('.add_to_cart');
addToCart.forEach((item) => {
    item.addEventListener('click', (e) => {
        let product_img = e.target.parentElement.parentElement.childNodes[1].getAttribute('src')

        let product_name = e.target.parentElement.childNodes[1].firstElementChild.textContent
        console.log(product_name);
        let product_price = parseInt(e.target.parentElement.childNodes[1].lastElementChild.textContent)
        let product_quantity = 1
        console.log(product_price);
        let product = new AddToCart();
        product.updateProduct(product_img, product_name, product_price, product_quantity)
    });


})
