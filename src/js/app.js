document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    darkMode();
});

function darkMode(){

    const autoDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if(autoDarkMode.matches){//matches es la variable true o false de si el sistema esta en darkMode
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }

    autoDarkMode.addEventListener('change', function(){//si cambiamos el modo en el sistema, automaticamente cambia en la pagina. Sin necesidad de reinciar
        if(autoDarkMode.matches){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode');
        }
    });

    const btnDarkMode = document.querySelector('.btn-darkm');
    btnDarkMode.addEventListener('click', function(){
       document.body.classList.toggle('dark-mode'); //agregamos la clase al body
    });
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
//    toggle Hace esto
//    if (navegacion.classList.contains('mostrar')){
//        navegacion.classList.remove('mostrar');
//    }else{
//       navegacion.classList.add('mostrar');
//    }
}
