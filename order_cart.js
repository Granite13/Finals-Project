const product = [
    {
        id: 0,
        image: 'images/product-1.png',
        title: 'Double Cheese n Patty',
        price: 180,
    },
    {
        id: 1,
        image: 'images/product-2.png',
        title: 'Breakfast Burger',
        price: 160,
    },
    {
        id: 2,
        image: 'images/product-3.png',
        title: 'Fish Fillet Burger',
        price: 230,
    },
    {
        id: 3,
        image: 'images/product-4.png',
        title: 'Double Pound Burger',
        price: 420,
    },
    {
        id: 4,
        image: 'images/product-5.png',
        title: 'Pepper n Spice Burger',
        price: 400,
    }
    ,
    {
        id: 5,
        image: 'images/chocolate_Drink.jpg',
        title: 'Chocolate Shake',
        price: 90,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}

function back_to_login(){
    return true;
}