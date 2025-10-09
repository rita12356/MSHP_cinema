let x1 = document.querySelector(`#x1y1`);
let x4 = document.querySelector(`#x1`);
let x1y = document.querySelector(`#x1y`);
let x11 = document.querySelector(`#x11`);
let x1y2 = document.querySelector(`#x1y2`);
let x2y = document.querySelector(`#x2y`);
let x2 = document.querySelector(`#x2`);
let x2x = document.querySelector(`#x2x`);
let x1y3 = document.querySelector(`#x1y3`);
let x13 = document.querySelector(`#x13`);
let x3y = document.querySelector(`#x3y`);
let xy3 = document.querySelector(`#xy3`);




   
x1.classList.add(`disabled`);

x1y.addEventListener(`click`, function() {
    let place = x1y;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x11.addEventListener(`click`, function() {
    let place = x11;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});


x1y2.addEventListener(`click`, function() {
    let place = x1y2;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x2y.addEventListener(`click`, function() {
    let place = x2y;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});


x2.addEventListener(`click`, function() {
    let place = x2;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x2x.addEventListener(`click`, function() {
    let place = x2x;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x1y3.addEventListener(`click`, function() {
    let place = x1y3;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x13.addEventListener(`click`, function() {
    let place = x13;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x3y.addEventListener(`click`, function() {
    let place = x3y;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

xy3.addEventListener(`click`, function() {
    let place = xy3;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});

x4.addEventListener(`click`, function() {
    let place = x4;
        if (place.classList.contains(`active`)) {
            place.classList.remove(`active`);
            price -= 500;
            placesCount -=1;
        } else{
            place.classList.add(`active`);
            price += 500;
            placesCount +=1;
        }

     placeCountNode.innerHTML = placesCount;
      
});




// Все контейнеры основного блока.

let placeCountNode = document.querySelector(`#places-count`);
let placeCount = document.querySelector(`#places`);
let priceNode = document.querySelector(`#price`);
let confirmNode = document.querySelector(`#confirm`);
let clearNode = document.querySelector(`#clear`);
let placesCount = 0;
let price = 0;



confirmNode.addEventListener(`click`, function() {
    
    
    priceNode.innerHTML = price;

});

clearNode.addEventListener(`click`, function() {
    
    x1.classList.remove(`active`);
    x4.classList.remove(`active`);
    x1y.classList.remove(`active`);
    x11.classList.remove(`active`);
    x1y2.classList.remove(`active`);
    x2y.classList.remove(`active`);
    x2.classList.remove(`active`);
    x2x.classList.remove(`active`);
    x1y3.classList.remove(`active`);
    x13.classList.remove(`active`);
    x3y.classList.remove(`active`);
    xy3.classList.remove(`active`);












    price = 0;
    placesCount = 0;
    placeCountNode.innerHTML = placesCount;
    priceNode.innerHTML = price;

});



