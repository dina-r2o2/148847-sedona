var link = document.querySelector(".btn-search");
var form = document.querySelector(".index-search");
var date_checkin = form.querySelector("[name=checkin]");
var date_checkout = form.querySelector("[name=checkout]");
var guest_adult = form.querySelector("[name=adult]");
var guest_child = form.querySelector("[name=child]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    form.classList.toggle("index-search-show");
    date_checkin.focus();
});

form.addEventListener("submit", function(event) {
  if (!date_checkin.value || !date_checkout.value) {
    event.preventDefault();
    form.classList.add("index-search-error");
  }
  if (!guest_adult.value || !guest_child.value) {
    event.preventDefault();
    form.classList.add("index-search-error");
  }
});