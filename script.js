var hamburger = document.getElementById("hamburger")
var mobile = document.getElementById("mobile")
var close = document.getElementById("close")
hamburger.addEventListener("click",
    function () {
        mobile.style.display = "block";
    }
)

close.addEventListener("click",
    function () {
        mobile.style.display = "none";

    }
)


// --Products Search--


var productSearch = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productSearch.querySelectorAll("h3");

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase();

    for (var i = 0; i < productlist.length; i++) {
        var parentElement = productlist[i].parentElement;
        if (productlist[i].textContent.toUpperCase().indexOf(enteredValue) < 0) {
            parentElement.style.display = "none";
        } else {
            parentElement.style.display = "block";
        }
    }
});


