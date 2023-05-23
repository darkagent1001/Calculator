let calButtons = document.querySelectorAll(".cal-button");
let formInputElement = document.querySelector(".form-input");


calButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.classList.contains("AC")){

            formInputElement.value = "";
    
        } else if (button.classList.contains("calculate")){
    
            formInputElement.value = eval(formInputElement.value);
    
        } else {
    
            formInputElement.value += button.value;
    
        }

    });

});