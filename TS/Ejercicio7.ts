function arreglarVideojuegos(s:string[]){
    let list:string[] = []
    for(let i=0;i<s.length;i++){
        let flag = 0
        let temp:string[] = s[i].split(' ')
        for(let j=0;j<temp.length;j++){
            if(temp[j]=='Mario'){
                flag = 1
            }
        }
        if(flag == 0){
            list.push(s[i])
        }
        flag = 0
    }
    return list
}

function factorial(num:number):number{
    if(num <= 1){
        return 1;
    }
    return num * factorial(num -1)
    
}

//Ejercicio 7
var notas:number[] = [5, 7, 8]
var nota_final:number= (notas[0]*0.55) + (notas[1]*0.30) + (notas[2]*0.15)
console.log(nota_final)

var videojuegos:string[] = ["League of legends", "Mario bross", "Mario party", "Uncharted", 
"Assassin's Creed", "Bloodborne", "Elder Ring", "Dark Souls", "Super Mario"]

videojuegos = arreglarVideojuegos(videojuegos)
console.log(videojuegos)

var numero:number = 5
console.log(factorial(numero))

