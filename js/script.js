var link = document.querySelector(".btn-search");
var popup = document.querySelector(".index-search");


link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("index-search-show");
});
