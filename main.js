var products = [];

function checkEmail(e)
{
    var exp = /^[A-Za-z0-9]{1,}(@)[a-z]{1,}(.)[a-z]{1,}$/;
    if(!(exp.test(e.value)))
    {
        e.focus();
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

var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload();
}


/* start setting the data */


let phoens = [],watches = [],laptops = [],tvs = [],earphoens = [];
fetch("products.json").then( (data) => {
    return data.json();
}).then ( (items) => {
    items.forEach( (item) => {
        item.incart = 0;
        item.id=0;
        switch (item.category)
        {
            case "mobile" :
                phoens.push(item);
                break;
            case "laptop" :
                laptops.push(item);
                break;
            case "tv" :
                tvs.push(item);
                break;
            case "earphone" :
                earphoens.push(item);
                break;
            case "smartwatch" :
                watches.push(item);
                break;
        }
    })
    addToHome();
    products = phoens.concat(laptops,tvs,earphoens,watches);
    localStorage.single = JSON.stringify(items[0]); // incase the user went to singleProduct directly without choosing a product
    localStorage.productTwo = JSON.stringify(items[1]);
    localStorage.productThree = JSON.stringify(items[2]);
    localStorage.productFour = JSON.stringify(items[3]);
    localStorage.productFive = JSON.stringify(items[4]);
})
var index = 0 ;
function addToHome()
{
    for(let i =0 ;i<20 ;i++, index++)
    {
        if(i<4)
        {
            document.querySelectorAll(".content>div>img")[i].src = phoens[index].image;
            document.querySelectorAll(".title")[i].innerHTML = phoens[index].name;
            document.querySelectorAll(".title+p")[i].innerHTML = "$"+phoens[index].price;
        }
        else if(i>=4 && i<8)
        {
            document.querySelectorAll(".content>div>img")[i].src = watches[index].image;
            document.querySelectorAll(".title")[i].innerHTML = watches[index].name;
            document.querySelectorAll(".title+p")[i].innerHTML = "$"+watches[index].price;
        }
        else if(i>=8 && i<12)
        {
            document.querySelectorAll(".content>div>img")[i].src = laptops[index].image;
            document.querySelectorAll(".title")[i].innerHTML = laptops[index].name;
            document.querySelectorAll(".title+p")[i].innerHTML = "$"+laptops[index].price;
        }
        else if(i>=12 && i<16)
        {
            document.querySelectorAll(".content>div>img")[i].src = tvs[index].image;
            document.querySelectorAll(".title")[i].innerHTML = tvs[index].name;
            document.querySelectorAll(".title+p")[i].innerHTML = "$"+tvs[index].price;
        }
        else
        {
            document.querySelectorAll(".content>div>img")[i].src = earphoens[index].image;
            document.querySelectorAll(".title")[i].innerHTML = earphoens[index].name;
            document.querySelectorAll(".title+p")[i].innerHTML = "$"+earphoens[index].price;
        }
        if(index == 3)
            index = -1;
    }
}


var products = phoens.concat(laptops,tvs,earphoens,watches);
var array = [];
/* start of single product */

function goToSingleProduct(idProduct)
{
    products.forEach( (item) => {
        if(item.name == document.querySelectorAll(".title")[idProduct].innerHTML)
        {
            localStorage.productOne = JSON.stringify(item);
            products.forEach( (product) => {
                if(product.category == item.category && item.name!=product.name)
                {
                    array.push(product);
                }
            })
        }
    })
    localStorage.productTwo = JSON.stringify(array[0]);
    localStorage.productThree = JSON.stringify(array[1]);
    localStorage.productFour = JSON.stringify(array[2]);
    localStorage.productFive = JSON.stringify(array[3]);
    location.href = "singleProduct/singleProduct.php";
    
}

/* end of single product */