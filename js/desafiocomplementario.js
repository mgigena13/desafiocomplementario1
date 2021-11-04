alert("Bienvenido a la Universidad Por favor Inicie sesión o en caso de no tener usuario registrese")

let estaRegistrado=prompt("Esta registrado? (Y/N)").toLowerCase()

if (estaRegistrado=="y"){
    login()
}else{
    register()
}

function register(){
    
    let nombre=prompt("Nombre")
    let apellido=prompt("Apellido")
    let userRegister=prompt("Ingrese un usuario - Minimo 6 caracteres").toLocaleLowerCase()
    let passwordRegister=prompt("Ingrese una contraseña- Minimo 8 caracteres").toLocaleLowerCase()
    let passwordConfirm=prompt("Confirme la contraseña").toLocaleLowerCase()
    
    if(userRegister.length<6){
        alert("El usuario debe tener minimo 6 caracteres, intente nuevamente")
        register()
    }
    else if(passwordRegister.length<8){
        alert("La contraseña debe tener minimo 8 caracteres, intente nuevamente")
        register()
    }
    else if(passwordConfirm!=passwordRegister){
        alert("Las contraseñas no coinciden, intente nuevamente")
        register()
        }else{
        alert(`${nombre} ${apellido} tu usuario ha sido creado`)
        alert("Ahora puedes Iniciar Sesión")
        login(userRegister,passwordRegister)
    }
        
}

function login(userRegister,passwordRegister){

    user= prompt("Usuario").toLocaleLowerCase()
    password= prompt("Contraseña").toLocaleLowerCase()
    
    
    if(user==userRegister && password==passwordRegister){
        console.log(userRegister)
        alert("Sesión iniciada")
    }else{
        alert("Usuario o contraseña incorrectos")
    }
}