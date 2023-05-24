let calButtons = document.querySelectorAll(".cal-button");
let formInputElement = document.querySelector(".form-input");


calButtons.forEach(button => {

    button.addEventListener("click", () => {

        if(button.classList.contains("AC")){

            formInputElement.value = "";
    
        } else if (button.classList.contains("calculate")){
    
            if(formInputElement.value.match("[a-z,A-Z]") != null){

                alert("I can't solve this.");
                formInputElement.value = "";
                
            } else {

                formInputElement.value = eval(formInputElement.value);

            }
    
        } else {
    
            formInputElement.value += button.value;
    
        }

    });

});