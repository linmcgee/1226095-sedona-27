var form = document.querySelector(".form-arrival");
var buttonSearchHotel = document.querySelector(".search-hotel");

var arrivalDate = form.querySelector("[name=arrival-date]");
var quantityAdults = form.querySelector("[name=quantity-adults]");

buttonSearchHotel.onclick = function(evt) {
	form.classList.toggle("form-arrival-invisible");
	form.classList.toggle("form-arrival-visible");
	arrivalDate.focus();
};

form.onsubmit = function (evt) {
	form.classList.remove("form-error");
	if (!arrivalDate || !quantityAdults) {
		evt.preventDefault();
		form.classList.remove("form-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("form-error");
	};
};

