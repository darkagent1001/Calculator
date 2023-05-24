const themeToggler = document.getElementById("theme-toggler");
const docElement = document.documentElement;
const themeStorage = localStorage.getItem("theme");

themeToggler.addEventListener("click", () => {

    if(docElement.classList.contains("dark")){

        docElement.classList.remove("dark");
        localStorage.setItem("theme", "light");

    } else {

        docElement.classList.add("dark");
        localStorage.setItem("theme", "dark");

    }

});

if(themeStorage == "dark" || ((themeStorage == null) && window.matchMedia("(prefers-color-scheme: dark)").matches)){

    docElement.classList.add("dark");

} else {

    docElement.classList.remove("dark");

}