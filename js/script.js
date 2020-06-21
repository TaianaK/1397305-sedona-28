var searchButton = document.querySelector(".legend-button");
var searchSlide = document.querySelector(".modal-search");
var dateArrival = document.querySelector(".date-arrival-item");
var dateDeparture = document.querySelector(".date-departure-item");
var searchForm = document.querySelector(".index-form");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchSlide.classList.add("modal-show");
  dateArrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value) {
    evt.preventDefault();
    } 
});

