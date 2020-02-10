var lowerPriceRange = document.getElementById('lower_price_range'),
    upperPriceRange = document.getElementById('upper_price_range'),
    lowerPriceNumber = document.getElementById('lower_price_num'),
    upperPriceNumber = document.getElementById('upper_price_num'),

    lowerPriceValue = parseInt(lowerPriceRange.value);
upperVal = parseInt(upperPriceRange.value);

upperPriceRange.oninput = () => {
    lowerPriceNumber.value = lowerPriceRange.value;
    upperPriceNumber.value = upperPriceRange.value;
    lowerPriceValue = parseInt(lowerPriceRange.value);
    upperVal = parseInt(upperPriceRange.value);
    if (upperVal < lowerPriceValue) {
        lowerPriceRange.value = upperVal;
    }
};


lowerPriceRange.oninput = () => {
    upperPriceNumber.value = upperPriceRange.value;
    lowerPriceNumber.value = lowerPriceRange.value;
    lowerPriceValue = parseInt(lowerPriceRange.value);
    upperVal = parseInt(upperPriceRange.value);
    if (lowerPriceValue > upperVal) {
        upperPriceRange.value = lowerPriceValue;
    }
};
lowerPriceNumber.addEventListener('change', (event) => {
 
    lowerPriceRange.value = lowerPriceNumber.value;
 

});
upperPriceNumber.addEventListener('change', (event) => {
  
    upperPriceRange.value = upperPriceNumber.value;

});



