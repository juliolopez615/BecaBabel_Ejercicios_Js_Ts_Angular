array = [];
function agregarNumero(){
    if (isNaN(campo.value) || campo.value == "") {
        alert("Por favor, introduce un numero.")
        campo.value="";
      }
    else{
        array.push(parseInt(campo.value));
        
        let h3 = document.createElement("h3")
        let texto = document.createTextNode(campo.value);
        h3.appendChild(texto)
        document.body.appendChild(h3)

        campo.value="";
    }
}

function operacion(id){
    console.log(id)
    switch (id) {
        case '+':
            campo2.value = parseInt(campo.value) + parseInt(campo1.value)
            break;

        case '-':
            campo2.value = parseInt(campo.value) - parseInt(campo1.value)
            break;

        case '*':
            campo2.value = parseInt(campo.value) * parseInt(campo1.value)
            break;
        case '*':
            campo2.value = parseInt(campo.value) / parseInt(campo1.value)
            break;
        case '/':
            campo2.value = (parseInt(campo.value) / parseInt(campo1.value)).toFixed(2);
            break;
        default:
          console.log("Algo ha ido mal")
          break;
      }
}

