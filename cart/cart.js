function showCart()
{
    if(localStorage.counter)
    {
        document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
        document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    }
    else
    {
        document.querySelectorAll(".counter")[0].innerHTML = 0;
        document.querySelectorAll(".counter")[1].innerHTML = 0;
    }
}
showCart();

var products = document.querySelector(".products");
var cartItems = localStorage.productInCart;
cartItems = JSON.parse(cartItems);

function displayCart()
{
    if(cartItems)
    {
        products.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            products.innerHTML += `
            <div class="d-flex justify-content-between product">
                <div class="d-flex align-items-center">
                    <div class="img"><img src="${item.image}" alt=""></div>
                    <p class="title ms-3">${item.name}</p>
                </div>
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-plus " onclick="plusOrMinus(${item.id},1)"></i>
                    <div class="quantity mx-4">${item.incart}</div>
                    <i class="fa-solid fa-minus " onclick="plusOrMinus(${item.id},0)"></i>
                </div>
                <div class="d-flex align-items-center">
                    <div class="price me-3">$${item.price*item.incart}</div>
                    <i class="fa-solid fa-xmark " onclick="removeItem(${item.id})"></i>
                </div>
            </div>
            `;
        });
    }
    if(parseInt(localStorage.counter) > 0)
    {
        document.querySelector(".empty>div").style.display = "none"; 
        document.querySelector(".total").innerHTML = "TOTAL COST: $" + localStorage.cost;
    }
    else
    {
        document.querySelector(".empty>div").style.display = "flex";
        document.querySelector(".total").innerHTML = "TOTAL COST: $0";
    }
    document.querySelector(".total").style.fontSize = "22px";
}
displayCart();


function plusOrMinus(num,plus)
{
    var newItems = cartItems;
    Object.values(cartItems).map(item => {
        if((item.id == num) && (plus == 1))
        {
            newItems[item.name].incart += 1;
            localStorage.counter = parseInt(localStorage.counter) + 1;
            localStorage.cost = parseInt(localStorage.cost) + item.price;
            document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
            document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
        }
        else if((item.id == num) && (plus != 1))
        {
            newItems[item.name].incart -= 1;
            localStorage.counter = parseInt(localStorage.counter) - 1;
            localStorage.cost = parseInt(localStorage.cost) - item.price;
            document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
            document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
            if(newItems[item.name].incart == 0)
            {
                delete newItems[item.name];
            }
        }
    });
    cartItems = newItems;
    localStorage.productInCart = JSON.stringify(cartItems);
    displayCart();
}

function removeItem(num)
{
    var newItems = {} ;
    Object.values(cartItems).map(item => {
        if((item.id != num))
        {
            newItems = {
                ...newItems,
                [item.name] : item
            };
        }
        else
        {
            localStorage.counter = parseInt(localStorage.counter) - parseInt(item.incart);
            localStorage.cost = parseInt(localStorage.cost) - ( parseInt(item.price) * parseInt(item.incart) );
        }
    });
    document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
    document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    cartItems = newItems;
    localStorage.productInCart = JSON.stringify(newItems);
    displayCart();
}



function clearCart()
{
    cartItems = {};
    localStorage.counter = 0;
    localStorage.cost = 0;
    localStorage.productInCart = JSON.stringify(cartItems);
    document.querySelectorAll(".counter")[0].innerHTML = 0;
    document.querySelectorAll(".counter")[1].innerHTML = 0;
    displayCart();
}
function continueShop()
{
    location.href = "../shop/shop.html";
}