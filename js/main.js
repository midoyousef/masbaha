// declare variables
let reset = document.querySelector(".reset");
let counterDown = document.querySelector(".counter-down");
let counterPlus = document.querySelector(".counter_plus");
let spanCounter = document.querySelector(".counter");
let counter = 0 || JSON.parse(window.localStorage.getItem("count"));
spanCounter.innerHTML = counter;

// function for click the reset button
reset.addEventListener("click", () => {
    counter = 0;
    spanCounter.innerHTML = counter;
    localStorage.setItem("count", counter);
});

// function for click the minus
counterDown.addEventListener("click", () => {
    counter <= 0 ? console.log("error") : (counter -= 1);
    spanCounter.innerHTML = counter;
    localStorage.setItem("count", counter);
});

// plus count added
counterPlus.addEventListener("click", () => {
    counter += 1;
    spanCounter.innerHTML = counter;
    localStorage.setItem("count", counter);
});
