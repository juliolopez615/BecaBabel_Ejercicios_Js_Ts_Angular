array = [];
op = "";
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
        case '/':
            campo2.value = (parseInt(campo.value) / parseInt(campo1.value)).toFixed(2);
            break;
        default:
          console.log("Algo ha ido mal")
          break;
      }
}

function presionar(id){
    if(document.getElementById(id).value == '+' || document.getElementById(id).value == '-' || document.getElementById(id).value == '*' || document.getElementById(id).value == '/' || document.getElementById(id).value == '%'){
        
        if(op != ""){
            alert("Esta calculadora solo permite una operacion :(")
            return
        }
        else{
            op = document.getElementById(id).value
        }
        
    }

    if(document.getElementById(id).value != 'igual' && document.getElementById(id).value != 'C' ){
        texto.value += document.getElementById(id).value
    }
    else{
        if(document.getElementById(id).value == 'C'){texto.value=""}
        else{
            let resultado
            switch (op) {
                case '+':
                    resultado = texto.value.split('+')
                    texto.value = parseInt(resultado[0]) + parseInt(resultado[1])
                    break;
                case '-':
                    resultado = texto.value.split('-')
                    texto.value = parseInt(resultado[0]) - parseInt(resultado[1])
                    break;
                case '*':
                    resultado = texto.value.split('*')
                    texto.value = parseInt(resultado[0]) * parseInt(resultado[1])
                    break;
                case '/':
                    resultado = texto.value.split('/')
                    texto.value = (parseInt(resultado[0]) / parseInt(resultado[1])).toFixed(2)
                    break;
                case '%':
                    resultado = texto.value.split('%')
                    texto.value = parseInt(resultado[0]) % parseInt(resultado[1])
                    break;
                default:
                console.log("Algo ha ido mal")
                break;
            }
          op = "";  

        }
              
    } 
}

