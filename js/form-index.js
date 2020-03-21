var form = document.querySelector(".form-arrival");
var buttonSearchHotel = document.querySelector(".search-hotel");

var arrivalDate = form.querySelector("[name=arrival-date]");
var quantityAdults = form.querySelector("[name=adults]");
var quantityChildren = form.querySelector("[name=children]");

buttonSearchHotel.addEventListener("click", function(evt) {
    form.classList.toggle("form-arrival-invisible");
    if (form.classList.contains("form-arrival-invisible")) {
        form.classList.remove("form-error");
    } else {
        arrivalDate.focus();
    }
});

form.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !quantityAdults.value || !quantityChildren.value) {
        evt.preventDefault();
        form.classList.remove("form-error");
        form.offsetWidth = form.offsetWidth;
        form.classList.add("form-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!form.classList.contains("form-arrival-invisible")) {
            form.classList.add("form-arrival-invisible");
        }
    }
});