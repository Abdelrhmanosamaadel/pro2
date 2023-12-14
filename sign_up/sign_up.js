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
    if( ( e.key >= 'a' && e.key <= 'z') || ( e.key >= 'A' && e.key <= 'Z' ) );
    else
    {
        e.preventDefault();
    }
}
function checkEmail(e)
{
    var exp = /^[A-Za-z0-9]{1,}(@)[a-z]{1,}(.)[a-z]{1,}$/;
    if(!(exp.test(e.target.value)))
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
function checkPass(e)
{
    if(e.target.value != document.getElementById("pass").value)
    {
        document.querySelector(".wrongPass").classList.remove("d-none");
    }
    else
    {
        document.querySelector(".wrongPass").classList.add("d-none");
    }
}

function checkSubmit(e)
{
    if(document.querySelector(".wrongPass").classList.contains("d-none"));
    else
    {
        e.preventDefault();
    }
}



var modalId = document.getElementById('modalId');

modalId.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        let button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});
