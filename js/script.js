document.addEventListener("DOMContentLoaded", function () {
    window.scrollTo(0, 0);

    const stayInTouchText = document.querySelector("#bottom-top h3");
    const firstTextUnderTop = document.getElementById("firstTextUnderTop");
    const secondTextUnderTop = document.getElementById("secondTextUnderTop");
    const thirdTextUnderTop = document.getElementById("thirdTextUnderTop");
    const fourthTextUnderTop = document.getElementById("fourthTextUnderTop");




    gsap.from(stayInTouchText, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: stayInTouchText,
            start: "top 80%",          // Comenzar la animación cuando el elemento esté al 80% de la vista
            toggleActions: "play none none none" // Definir las acciones de la animación
        }
    });

    gsap.from(firstTextUnderTop, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: firstTextUnderTop,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Define la animación para el segundo texto
    gsap.from(secondTextUnderTop, {
        opacity: 0,             // Empieza con opacidad 0
        y: 50,                  // Empieza 50px debajo de su posición normal
        duration: 1.5,          // Duración de la animación en segundos
        ease: "power2.out",     // Tipo de easing para la animación
        scrollTrigger: {
            trigger: secondTextUnderTop,   // Disparar la animación cuando se visualice el elemento
            start: "top 80%",          // Comenzar la animación cuando el elemento esté al 80% de la vista
            toggleActions: "play none none none" // Definir las acciones de la animación
        }
    });

    // Define la animación para el tercer texto
    gsap.from(thirdTextUnderTop, {
        opacity: 0,             // Empieza con opacidad 0
        y: 50,                  // Empieza 50px debajo de su posición normal
        duration: 1.5,          // Duración de la animación en segundos
        ease: "power2.out",     // Tipo de easing para la animación
        scrollTrigger: {
            trigger: thirdTextUnderTop,   // Disparar la animación cuando se visualice el elemento
            start: "top 80%",          // Comenzar la animación cuando el elemento esté al 80% de la vista
            toggleActions: "play none none none" // Definir las acciones de la animación
        }
    });

    // Define la animación para el cuarto texto
    gsap.from(fourthTextUnderTop, {
        opacity: 0,             // Empieza con opacidad 0
        y: 50,                  // Empieza 50px debajo de su posición normal
        duration: 1.5,          // Duración de la animación en segundos
        ease: "power2.out",     // Tipo de easing para la animación
        scrollTrigger: {
            trigger: fourthTextUnderTop,   // Disparar la animación cuando se visualice el elemento
            start: "top 80%",          // Comenzar la animación cuando el elemento esté al 80% de la vista
            toggleActions: "play none none none" // Definir las acciones de la animación
        }
    });

    const videoExplanation = document.getElementById("video-explanation");
    const triggerVideo = document.getElementById("fourthTextUnderTop");
    const videoElement = videoExplanation.querySelector("video");

    // Definir las dimensiones máximas del video
    const maxWidth = 1390;
    const maxHeight = 634;

    gsap.to(videoElement, {
        width: maxWidth,
        height: maxHeight,
        scrollTrigger: {
            trigger: triggerVideo,
            start: "top top",
            scrub: true
        }
    });


    // Seleccionar los elementos
    const hand = document.getElementById("hand");
    const lamp = document.getElementById("lamp");

    // Animación para el elemento #hand
    gsap.from(hand, {
        x: "100%", // Iniciar desde la derecha fuera de la pantalla
        opacity: 0, // Iniciar con opacidad cero
        duration: 1.5, // Duración de la animación en segundos
        scrollTrigger: {
            trigger: "#pause", // Disparar la animación cuando se visualiza la sección
            start: "top 60%", // Comenzar la animación cuando la sección está al 90% de la vista
            end: "bottom 30%", // Finalizar la animación cuando la sección está al 10% de la vista
            scrub: true // Haz que la animación se ajuste al desplazamiento del usuario
        }
    });

    // Animación para el elemento #lamp
    gsap.from(lamp, {
        y: "100%", // Iniciar desde abajo fuera de la pantalla
        opacity: 0, // Iniciar con opacidad cero
        duration: 1.5, // Duración de la animación en segundos
        scrollTrigger: {
            trigger: "#pause", // Disparar la animación cuando se visualiza la sección
            start: "top 70%", // Comenzar la animación cuando la sección está al 90% de la vista
            end: "bottom 20%", // Finalizar la animación cuando la sección está al 10% de la vista
            scrub: true // Haz que la animación se ajuste al desplazamiento del usuario
        }
    });


    const disclaimerGranmother = document.getElementById("disclaimerGranmother");

    // Define la animación para el texto "Stay in touch that loved ones."
    gsap.from(disclaimerGranmother, {
        opacity: 0,             // Empieza con opacidad 0
        y: 50,                  // Empieza 50px debajo de su posición normal
        duration: 1.5,          // Duración de la animación en segundos
        ease: "power2.out",     // Tipo de easing para la animación
        scrollTrigger: {
            trigger: "#real-experience",   // Disparar la animación cuando se visualice el elemento
            start: "top 30%",          // Comenzar la animación cuando el elemento esté al 80% de la vista
            toggleActions: "play none none none" // Definir las acciones de la animación
        }
    });



});




window.onload = function () {


    // Fecha objetivo (1 de mayo)
    const targetDate = new Date('2024-05-01T00:00:00');
    // Elemento HTML donde mostraremos la cuenta regresiva
    const countdownElements = document.querySelectorAll('.days');



    // Fecha y hora actual
    const now = new Date();

    // Diferencia entre la fecha objetivo y la fecha actual en milisegundos
    const difference = targetDate - now;

    // Calculamos días restantes
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    // Mostramos la cuenta regresiva en el elemento HTML
    countdownElements.forEach(element => {
        element.innerHTML = `${days}`;
    });



    var pause = document.getElementById('pause');
    var play = document.getElementById("play");
    let vid = document.getElementById("videoExperience");
    vid.play();
    let videoHero = document.getElementById("videoHero");
    videoHero.play();
    pause.onclick = function () {
        vid.pause();
        pause.classList.add("hidden")
        play.classList.remove("hidden");
    };

    play.onclick = function () {
        vid.play();
        play.classList.add("hidden")
        pause.classList.remove("hidden");
    };
};


// Función para manejar el clic y mostrar/ocultar la respuesta
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



document.addEventListener("DOMContentLoaded", function () {
   


    
    // Cerrar el popup cuando se haga clic en el botón de cerrar
    document.getElementById("popupNewsletterEmail").addEventListener("click", function() {
        document.getElementById("popupNewsletterEmail").style.display = "none";
    });

 

    // Evitar que el clic en el contenido del popup cierre el popup
    document.getElementById("popup-contenido").addEventListener("click", function(event) {
        event.stopPropagation(); // Detiene la propagación del clic al contenedor del popup
    });
    
    

    document.getElementById("sendMobilePopupInput").addEventListener("click", function () {
        const direccionCorreo = document.getElementById("mobilePopupInput").value;
        if (!direccionCorreo || !/^\S+@\S+\.\S+$/.test(direccionCorreo)) {
            document.getElementById("errorEmailPopupMobile").style.display = "block";
            return;
        }
        document.getElementById("errorEmailPopupMobile").style.display = "none";
        sendEmail(direccionCorreo);
        document.getElementById("popupNewsletterEmail").style.display = "none"; 
    });



    document.getElementById("sendDesktopPopupInput").addEventListener("click", function () {
        const direccionCorreo = document.getElementById("desktopPopupInput").value;
        if (!direccionCorreo || !/^\S+@\S+\.\S+$/.test(direccionCorreo)) {
            document.getElementById("errorEmailPopupMobile").style.display = "block";
            return;
        }
        document.getElementById("errorEmailDesktopMobile").style.display = "none";
        sendEmail(direccionCorreo);
        document.getElementById("miPopup").style.display = "none"; 
    });


    document.getElementById("sendMobileInput").addEventListener("click", function () {
        const direccionCorreo = document.getElementById("mobileInput").value;
        if (!direccionCorreo || !/^\S+@\S+\.\S+$/.test(direccionCorreo)) {
            document.getElementById("errorEmailMobile").style.display = "block";
            return;
        }
        document.getElementById("errorEmailMobile").style.display = "none";
        sendEmail(direccionCorreo, "thankYouMobile"); 
    });



    document.getElementById("sendDesktopInput").addEventListener("click", function () {
        const direccionCorreo = document.getElementById("desktopPopupInput").value;
        if (!direccionCorreo || !/^\S+@\S+\.\S+$/.test(direccionCorreo)) {
            document.getElementById("errorEmailDesktop").style.display = "block";
            return;
        }
        document.getElementById("errorEmailDesktop").style.display = "none";
        sendEmail(direccionCorreo, "thankYouDesktop"); 
    });

 
    




    function abrirPopup() {
        var modal = document.getElementById("miPopup");
        var modalMobile = document.getElementById("popupNewsletterEmail");
        modal.style.display = "block";
        modalMobile.style.display = "block";

    }
    if (!localStorage.getItem('popup_mostrado')) {
        setTimeout(abrirPopup, 4000);
    }



    var closeModalMobile = document.getElementById("cerrarPopupMobile");
    closeModalMobile.addEventListener("click", function () {
        var modalMobile = document.getElementById("popupNewsletterEmail");
        modalMobile.style.display = "none";
    })



    var closeModalBtn = document.getElementById("cerrarPopup");

    closeModalBtn.addEventListener("click", function () {
        var modal = document.getElementById("miPopup");
        modal.style.display = "none";
    })

    


});

let emailbackoup = "";
function sendEmail(email, idThankyou) {


    if (email != emailbackoup) {
        emailbackoup = email;
        localStorage.setItem('popup_mostrado', 'true');

        const apiUrl = 'https://www.huuglight.com/emails/create';

        // Opciones de la solicitud
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        };

        fetch(apiUrl, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo enviar el correo electrónico');
                }
              
                return response.json();
            })
            .then(data => {
                console.log('Correo electrónico enviado correctamente:', data);
               
            })
            .catch(error => { 
                console.error('Error al enviar el correo electrónico:', error);
            });
    }
    if (idThankyou) {
        document.getElementById(idThankyou).style.display = "block";
    }


}


