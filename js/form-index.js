var form = document.querySelector(".form-arrival");
var buttonSearchHotel = document.querySelector(".search-hotel");

var arrivalDate = form.querySelector("[name=arrival-date]");
var quantityAdults = form.querySelector("[name=adults]");
var quantityChildren = form.querySelector("[name=children]");

var counts = get_count();
quantityAdults.value = counts.adults_count ? counts.adults_count : 0;
quantityChildren.value = counts.child_count ? counts.child_count : 0;

buttonSearchHotel.onclick = function(evt) {
	form.classList.toggle("form-arrival-invisible");
	form.classList.toggle("form-arrival-visible");
	arrivalDate.focus();

	counts = get_count();
	quantityAdults.value = counts.adults_count ? counts.adults_count : 0;
	quantityChildren.value = counts.child_count ? counts.child_count : 0;
	set_count(quantityChildren.value, quantityAdults.value)
};

form.onsubmit = function (evt) {
	form.classList.remove("form-error");
	if (!arrivalDate.value || !quantityAdults.value || !quantityChildren.value) {
		evt.preventDefault();
		form.classList.remove("form-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("form-error");
	}
	else { //валидные данные
		console.log(arrivalDate.value, quantityAdults.value);
		evt.preventDefault();//чтобы на е не переходить
	}
};

function set_count(childs_count, adults_count){
	localStorage.setItem('childs_count', childs_count);
	localStorage.setItem('adults_count', adults_count)
}

function get_count(){
	let child_count, adults_count;	
  	try {
	    child_count = localStorage.getItem("childs_count");
	    adults_count = localStorage.getItem('adults_count');
  	} catch (err) {
  		console.error(err);
  		return
	}
    
  	return {
  		adults_count,
  		child_count
  	}
}
