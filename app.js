const viewsEl = document.querySelector("#views");
const sliderEl = document.querySelector("#pageviews");
const priceEl = document.querySelector('#price');
sliderEl.addEventListener("input", (event) => {
  viewsEl.textContent = event.target.value/1000
  const costs = calculateCosts(event.target.value);
  priceEl.textContent = costs;
})

function calculateCosts(value) {
  let result;
  if (value <= 10000) {
    result = 8.00;
  } else if (value <=50000) {
    result = 12.00;
  } else if (value <=100000) {
    result = 16.00;
  } else if (value <= 500000){
    result = 24.00;
  } else if (value <= 1000000){
    result = 36.00;
  }
  return result;
}

sale.addEventListener('click', ()=> {
  const isDiscount = document.querySelector('#sale').checked;
  const costs = calculateCosts(sliderEl.value);
if (isDiscount) {  
  priceEl.textContent = costs * 0.75;
} else {
  priceEl.textContent = costs;
}
})