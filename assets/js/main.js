const buttons = document.querySelectorAll("button");
const formInput = document.querySelector(".form-input");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.classList.contains("AC")){

            formInput.value = "";
    
        } else if (button.classList.contains("calculate")){
    
            formInput.value = eval(formInput.value);
    
        } else {
    
            formInput.value += button.value;
    
        }

    });

});