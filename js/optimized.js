var searchButton=document.querySelector(".legend-button"),modalSearch=document.querySelector(".modal-search"),dateArrival=document.querySelector(".date-arrival-item"),dateDeparture=document.querySelector(".date-departure-item"),searchForm=document.querySelector(".index-form");searchButton.addEventListener("click",function(e){e.preventDefault(),modalSearch.classList.add("modal-close"),modalSearch.classList.remove("modal-error")}),searchForm.addEventListener("submit",function(e){dateArrival.value&&dateDeparture.value||(e.preventDefault(),modalSearch.classList.add("modal-error"))});