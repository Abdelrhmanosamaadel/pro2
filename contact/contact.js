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


function checkName(e)
{
    if(e.key>=0 && e.key<=9)
    {
        e.preventDefault();
    }
}
function checkEmail(e)
{
    var exp = /^[A-Za-z0-9]{1,}(@)[a-z]{1,}(.)[a-z]{1,}$/;
    if(!(exp.test(e.value)))
    {
        e.focus();
    }
}
function checkPhone(e)
{
    if(e.key<"0" || e.key>"9")
    {
        if(e.key == "Backspace" || e.key == "Delete");
        else
            e.preventDefault();
    }
}