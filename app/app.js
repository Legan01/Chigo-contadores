/*

(function App() {
    let isDark = false;
    if (localStorage.getItem("dark-mode")) {
        isDark = true;
        setDarkTheme();
    }
    const themeToggle = document.querySelector(".theme-toggle");
    themeToggle.addEventListener("click", () => {
        if (isDark) {
            setLightTheme();
            isDark = false;
            ManageLocalStorage("DELETE");
            return;
        }
        setDarkTheme();
        ManageLocalStorage("ADD");
        isDark = true;
    });
                            
    function setLightTheme() {
        document.body.classList.remove("dark");
    }
    function setDarkTheme() {
        document.body.classList.add("dark");
    }
                            
    function ManageLocalStorage(command) {
        if (command === "DELETE") {
            localStorage.removeItem("dark-mode");
            return;
        }
        localStorage.setItem("dark-mode", true);
    }
})();
         
*/
/*romper el preloader */

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 1500);

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));


let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("I give you dark")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
    console.log("I give you light")
}

if(theme === 'dark'){
    changeThemeToDark()
}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
});



function suma(){
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "asesoramiento para ayudarle en las decisiones que debas tomar en materia de Finanzacon el objetivo de que puedas rentabilizar cada vez mas tus recursos financieros",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
}