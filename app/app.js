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

const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) =>
    item.classList.remove("active"));
    this.classList.add("active");
}

list.forEach((item) =>
item.addEventListener("click", activeLink));

const toggle = document.querySelector('#toggle');
const themeActual = localStorage.getItem('theme');

if (themeActual) {
  document.documentElement.setAttribute('data-theme', themeActual);
}

if (themeActual === 'oscuro') {
  toggle.checked = true;
}

const cambiarTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'oscuro');
    localStorage.setItem('theme', 'oscuro');
  } else {
    document.documentElement.setAttribute('data-theme', null);
    localStorage.setItem('theme', null);
  }
};

toggle.addEventListener('click', cambiarTheme);







document.getElementById("boton").addEventListener("click",e=>{
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
});


document.getElementById("contabilidad").addEventListener("click",e=>{
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "asesoramiento y elaboración puntual de los comprobantes de nómina, elaboración de finiquitos, calculo de vacaciones, primas vacacionales, aguinaldo, tiempo extra, etc.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});


document.getElementById("control").addEventListener("click",e=>{
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "Revisiónes de procesos de control.   ",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});


document.getElementById("control").addEventListener("click",e=>{
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "Revisiónes de procesos de control.   ",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});


document.getElementById("impuestos").addEventListener("click",e=>{
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "Revisiónes de procesos de control.   ",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});






document.getElementById("administracion").addEventListener("click",e=>{
  Swal.fire({

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
    title: "Asesoria fiscal",
    html:
      "asesoramiento y elaboración puntual de los comprobantes de nómina, elaboración de finiquitos, calculo de vacaciones, primas vacacionales, aguinaldo, tiempo extra, etc.",
    showCloseButton: true,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
});











