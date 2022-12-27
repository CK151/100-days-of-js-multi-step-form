const formItems = document.getElementsByClassName("form-item");
const button = document.getElementsByClassName("btn");
const steps = document.getElementsByClassName("step");

let currentFormItem = 0;

formItems[0].style.display = "block";


if (currentFormItem == 0) {
    button[0].style.display = "none";
    steps[0].style.background = "#1e9df7";
}

//next button
button[1].addEventListener("click", () => {
    currentFormItem++;
    const prevFormItem = currentFormItem -1;
    if (currentFormItem > 0 && currentFormItem < 4) {
        button[0].style.display = "inline-block";
        formItems[currentFormItem].style.display = "block";
        formItems[prevFormItem].style.display = "none";
        steps[currentFormItem].style.background = "#1e9df7";

        if (currentFormItem == 3) {
            button[1].innerHTML = "Submit";
        }
    }
    else {
        if (currentFormItem > 3) {
            //validate the form
            alert("form submitted Successfully")
        }
    }
})



//prviose button 

button[0].addEventListener("click", () => {
    if (currentFormItem > 0) {
        currentFormItem--;
        const nextFormItem = currentFormItem + 1;
        formItems[currentFormItem].style.display = "block";
        formItems[nextFormItem].style.display = "none";
        steps[nextFormItem].style.background = "#cfd2d4";

        if (currentFormItem == 0) {
            button[0].style.display = "none";
        }

        if (currentFormItem < 3) {
            button[1].innerHTML = "Next";
        }
    }
})