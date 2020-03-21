var form = document.querySelector(".form-arrival");
var buttonSearchHotel = document.querySelector(".search-hotel");

var arrivalDate = form.querySelector("[name=arrival-date]");
var quantityAdults = form.querySelector("[name=adults]");
var quantityChildren = form.querySelector("[name=children]");

buttonSearchHotel.addEventListener("click", function(evt) {
  form.classList.toggle("form-arrival-visible");
  if (form.classList.contains("form-arrival-visible")) {
    arrivalDate.focus();
  } else {
    form.classList.remove("form-error");
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
    if (form.classList.contains("form-arrival-visible")) {
      form.classList.remove("form-arrival-visible");
    }
  }
});