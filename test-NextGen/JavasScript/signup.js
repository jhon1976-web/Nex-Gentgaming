const signupForm = document.querySelector('#signupForm');

//Agregar un evento para el envio del formulario

signupForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Obtener los valores del formulario
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('Users')) || []

    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        Swal.fire({
            icon:"error",
            title:"Error de Datos",
            text: "El correo que ingresaste ya esta registrado"
        })   
        return
    }
    Users.push({name, email, password})
    localStorage.setItem('Users',JSON.stringify(Users))

    Swal.fire({
        icon:"sucess",
        title:"Registro exitoso",
        text: "Tu registro se ha realizado con exito"
    }).then(() => {
        window.location.href = "login.html"
    })
})