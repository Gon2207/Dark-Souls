const cargarUsuarios = () => {
    let usuarios = []

    const usuario1= { 
        user: "usuario1",
        pass: "1234"
    }

    const usuario2= {
        user: "Riquelme",
        pass: "1234"
    }

    const usuario3= {
        user: "Ramiro",
        pass: "0007"
    }

    usuarios.push(usuario1)
    
    usuarios.push(usuario2)
    
    usuarios.push(usuario3)

    localStorage.setItem("users", JSON.stringify(usuarios));
}

const login = () => {
    let user = document.querySelector("#usuario").value;
    let pass = document.querySelector("#password").value;
    cargarUsuarios();

    if(localStorage.getItem("users")){
        let users = JSON.parse(localStorage.getItem("users"));

        for(let indice = 0; indice < users.length; indice++){
            if(user === users[indice].user && pass === users[indice].pass){
                console.log("Usuario Logueado");
                break;
            }
        }
    }
}

document.querySelector("#Boton").addEventListener('click', (event) =>{
    event.preventDefault();
    login();
});
