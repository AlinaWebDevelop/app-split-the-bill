const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

//Кнопка Add a tip

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener ("click", showTip);


function showTip(e) {
    e.preventDefault ();
    tip.style.display = "block";
}


function calculateAmount(e) {
    e.preventDefault();

    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill ==="" || people === "" || people <1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
        })
    }

// ФОРМУЛЫ

    let amountPerPerson = bill/people;
    let tipPerPerson = (bill*tip) / people;
    let totalSum = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed (2);
    tipPerPerson = tipPerPerson.toFixed (2);
    totalSum = totalSum.toFixed(2);

//ОТОБРАЖЕНИЕ

document.querySelector("#divideBill").textContent = amountPerPerson;
document.querySelector("#divideTip").textContent = tipPerPerson;
document.querySelector("#billAndTip").textContent = totalSum;

}

//Audio total Amount

const audioButton = document.querySelector("#btn");
audioButton.addEventListener("click", function() {
document.querySelector("#myAudio").play();
})
