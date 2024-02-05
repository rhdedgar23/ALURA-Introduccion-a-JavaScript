//alert("Hola Mundo");

let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//palabraVeces = "vez";
let numMaxIntentos = 3; 

while(numeroSecreto != numeroUsuario){
    
    numeroUsuario = parseInt(prompt("Me indicas un numero, por favor?:"));

    //var -> function scoped
    //let, const -> block scoped
    //with var, when declaring a global variable, you add that varibale to the window object (which only has one instance)
    //with let, on the other hand, the variable is still global but isnt added to the window object

    console.log("Numero de usuario: " + numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //los template strings se ponen entre comillas simples invertidas
        //las variables se ponen entre ${}, pero tambien mas codigo
        alert(`Acertaste!,  el numero secreto es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}.`);
    }
    else{
        //alert("Lo siento, no acertaste el numero.");
        if(numeroUsuario > numeroSecreto){
            alert("El numero secreto es menor");
        }
        else{
            alert("El numero secreto es mayor");
        }

        intentos = intentos + 1;
        //palabraVeces = "veces";

        if(intentos > numMaxIntentos){
            alert("Llegaste al numero maximo de intentos");
            break;
        }

    }
}

