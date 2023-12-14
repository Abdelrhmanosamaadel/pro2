try{
    var one = JSON.parse(localStorage.productOne);
}
catch(Exception)
{
    var one = JSON.parse(localStorage.single);
}
var two = JSON.parse(localStorage.productTwo);
var three = JSON.parse(localStorage.productThree);
var four = JSON.parse(localStorage.productFour);
var five = JSON.parse(localStorage.productFive);
var array = [two,three,four,five];

/* start of setting data */

function setData()
{
    document.querySelector("#imgOne>img").src = one.image;
    document.querySelector("#headOne").innerHTML = one.name;
    document.querySelector("#starsOne").innerHTML = one.stars;
    document.querySelector("#priceOne").innerHTML = one.price;
    document.querySelector("#descriptionOne").innerHTML = one.description;
    document.querySelector("#categoryOne").innerHTML = one.category;
    for(let i=0 ; i<4; i++)
    {
        document.querySelectorAll(".phone-image>img")[i].src = array[i].image;
        document.querySelectorAll(".title")[i].innerHTML = array[i].name;
        document.querySelectorAll(".title+p")[i].innerHTML = array[i].price;
    }
}
setData();

/* end of setting data */


/* start of check input number */
function editValue(num, id) {
    if (num == 1) {
        document.querySelectorAll(".number>input")[id].value++;
    } else {
        if(document.querySelectorAll(".number>input")[id].value>1)
            document.querySelectorAll(".number>input")[id].value--;
    }
}
window.onload =  function() {
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
};
function checkValue(e) // e is event
{
    if((e.key>="0" && e.key<="9" ));
    else if((e.key == "Backspace" || e.key == "Delete"))
    {
        
    }
    else
    {
        e.preventDefault();
    }
    
}

function returnToOne(e) // e is this
{
    if(e.value == "")
        e.value =  1;
    if(e.value != Math.round(e.value))
        e.value = Math.round(e.value); // if we write big number and become in form of 1.6e+10, we cannot decrease it before making it 2 or 1 again
}

/* end of check input number */



/* adding to cart or favourites */

var newValue = 0 ;
function addToCart()
{
    newValue = document.querySelectorAll(".number>input")[0].value;
    newValue = parseInt(newValue);
    var cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    if(cartItems)
    {
        if(cartItems[one.name] == undefined)
        {
            cartItems = {
                ...cartItems,
                [one.name]: one
            }
        }
        cartItems[one.name].incart = parseInt(cartItems[one.name].incart)+newValue;
    }
    else
    {
        one.incart = newValue;
        cartItems = {
            [one.name] : one
        }
    }
    localStorage.productInCart = JSON.stringify(cartItems);
    console.log(newValue);
    changeCounter()
}

function changeCounter()
{
    if(localStorage.counter)
        localStorage.counter = parseInt(localStorage.counter)+newValue;
    else
        localStorage.counter = newValue;
    document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
    document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    changeCost();
}

function changeCost()
{
    if(localStorage.cost)
        localStorage.cost = parseInt(localStorage.cost)+(parseInt(one.price)*newValue);
    else
        localStorage.cost = parseInt(one.price)*newValue;
}


/* VIEW button */

function goToSingleProduct(num)
{
    var obj ;
    if(num == 0)
    {
        // switch between productOne and productTwo
        obj = localStorage.productOne ;
        localStorage.productOne = localStorage.productTwo;
        localStorage.productTwo = obj 
    }
    else if(num == 1)
    {
        // switch between productOne and productTwo
        obj = localStorage.productOne ;
        localStorage.productOne = localStorage.productThree
        localStorage.productThree = obj  
    }
    else if(num == 2)
    {
        // switch between productOne and productTwo
        obj = localStorage.productOne ;
        localStorage.productOne = localStorage.productFour;
        localStorage.productFour = obj 
    }
    else
    {
        // switch between productOne and productTwo
        obj = localStorage.productOne ;
        localStorage.productOne = localStorage.productFive
        localStorage.productFive = obj 
    }
    location.reload();
}