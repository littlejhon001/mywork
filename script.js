
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const closeMenu = document.querySelector(".nav-toggle")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});



//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("photoshop");
    habilidades[3].classList.add("wordpress");
    habilidades[4].classList.add("drupal");
    habilidades[5].classList.add("comunicacion");
    habilidades[6].classList.add("trabajo");
    habilidades[7].classList.add("creatividad");
    habilidades[8].classList.add("dedicacion");
    habilidades[9].classList.add("proyect");
  }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
}



const sendBtn = document.querySelector('#send_btn')
sendBtn.addEventListener('submit', enviarMensaje)

function enviarMensaje() {


  var inputName = document.getElementById("name").value;
  var inputPhone = document.getElementById('phone').value;
  var inputEmail = document.getElementById('email').value;
  var inputText = document.getElementById('text').value;

  let url = "https://api.whatsapp.com/send?phone=573025280830&text=Hola%20mi%20nombre%20es: %0A" + inputName + "%0Ami%20numero%20es: " + inputPhone + "%0AMi%20email%20es: " + inputEmail + "%0Ay%20quisiera%20saber%20mas%20de%20tus%20conocimientos " + inputText + "%0A";
  window.open(url);
}

const form = document.getElementById('send_form');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const emailField = document.getElementById('email');
const textField = document.getElementById('text');

// Agregar un manejador de eventos para el evento "submit"
form.addEventListener('submit', function (event) {
  // Detener el envío del formulario para poder validar los campos primero
  event.preventDefault();

  // Validar el campo de nombre
  if (nameField.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'write your name!',
    })
    return;
  }

  else if (phoneField.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'write your phone number!',
    })
     return;
  }

  // Validar el campo de correo electrónico
  else if (emailField.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'write your email!',
    })    
    return;
  }

  // Validar el campo de mensaje
  else if (textField.value.trim() === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'write something!',
    })
    return;
  }
else{
 Swal.fire({
    title: 'Are you sure?',
    text: "you will send a message to whatsapp! ☺ 📲",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#00f22c',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, send it!'
  }).then((result) => {
    if (result.isConfirmed) {
      enviarMensaje();
      form.submit();
      Swal.fire(
        'back!',
        'your message has not been sent ',
        'success'
      )
    }

  })


 
}

 

  // Si todos los campos son válidos, enviar el formulario
  
});

