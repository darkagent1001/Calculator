const copyButton = document.querySelector(".copy");
const alertElement = document.querySelector(".alert");

    navigator.permissions.query({name: "clipboard-write"}).then((result) => {

        if(result.state == ("granted" || "prompt")){

            copyButton.classList.remove("invisible");

        }

    });

copyButton.addEventListener("click", () => {

    navigator.clipboard.writeText(formInputElement.value).then(() => {
        
        alertElement.classList.remove("invisible");

        setTimeout(() => {
    
            alertElement.classList.add("invisible");
    
        }, 2500);

    });

});