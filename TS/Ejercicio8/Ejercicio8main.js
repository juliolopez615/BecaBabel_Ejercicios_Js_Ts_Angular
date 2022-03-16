class Historial {
    constructor(id, goles, amarillas, rojas) {
        this.id = 0;
        this.numGoles = 0;
        this.numAmarillas = 0;
        this.numRojas = 0;
        this.id = id;
        this.numGoles = goles;
        this.numAmarillas = amarillas;
        this.numRojas = rojas;
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _numGoles() {
        return this.numGoles;
    }
    set _numGoles(value) {
        this.numGoles = value;
    }
    get _numAmarillas() {
        return this.numAmarillas;
    }
    set _numAmarillas(value) {
        this.numAmarillas = value;
    }
    get _numRojas() {
        return this.numRojas;
    }
    set _numRojas(value) {
        this.numRojas = value;
    }
    imprimir() {
        let list = [];
        list.push(this.id, this.numGoles, this.numAmarillas, this.numRojas);
        return list;
    }
}
class Jugador {
    constructor(id, nombre, edad, pais, historial) {
        this.id = 0;
        this.nombre = "";
        this.edad = 0;
        this.pais = "";
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.historial = historial;
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _nombre() {
        return this.nombre;
    }
    set _nombre(value) {
        this.nombre = value;
    }
    get _edad() {
        return this.edad;
    }
    set _edad(value) {
        this.edad = value;
    }
    get _pais() {
        return this.pais;
    }
    set _pais(value) {
        this.pais = value;
    }
    get _historial() {
        return this.historial;
    }
    set _historial(historial) {
        this.historial._id = historial._id;
        this.historial._numGoles = historial._numGoles;
        this.historial._numAmarillas = historial._numAmarillas;
        this.historial._numRojas = historial._numRojas;
    }
}
class Equipo {
    constructor(id, nombre, fecha, jugadores) {
        this.id = 0;
        this.nombre = "";
        this.fecha = "";
        this.jugadores = [];
        this.id = id;
        this.nombre = nombre;
        this.fecha = fecha;
        this.jugadores = [];
        this.jugadores = jugadores.slice();
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _nombre() {
        return this.nombre;
    }
    set _nombre(value) {
        this.nombre = value;
    }
    get _fecha() {
        return this.fecha;
    }
    set _fecha(value) {
        this.fecha = value;
    }
    get _jugadores() {
        return this.jugadores;
    }
    set _jugadores(jugadores) {
        this.jugadores = [];
        this.jugadores = jugadores.slice();
    }
    imprimir() {
        console.log("\n----------INFORMACION SOBRE EL EQUIPO-------------\n\n");
        console.log("Id del equipo: " + this.id);
        console.log("Nombre del equipo: " + this.nombre);
        console.log("Fecha de fromación del equipo: " + this.fecha);
        console.log("\n");
        console.log("\n----------INFORMACION SOBRE LOS JUGADORES DEL EQUIPO-------------\n\n");
        for (let i = 0; i < this.jugadores.length; i++) {
            console.log("\n----------JUGADOR " + (i + 1) + "-------------\n\n");
            console.log("Id jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].id);
            console.log("Nombre jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].nombre);
            console.log("Edad jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].edad + "\n");
            console.log("Id historial jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].historial.id);
            console.log("Numero goles jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].historial.numGoles);
            console.log("Numero amarillas jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].historial.numAmarillas);
            console.log("Numero rojas jugador " + (i + 1) + " de " + this.nombre + ": " + this.jugadores[i].historial.numRojas);
        }
    }
}
function crearlistajugadores() {
    let list = [];
    let listNombres = ["Pedro", "Julio", "Ana"];
    let listEdades = [23, 26, 22];
    let listHistorial = [new Historial(1, 3, 2, 0), new Historial(2, 5, 2, 1), new Historial(3, 4, 3, 0)];
    for (let i = 0; i < 3; i++) {
        let temp = new Jugador(i, listNombres[i], listEdades[i], "Spain", listHistorial[i]);
        list.push(temp);
    }
    return list;
}
function main() {
    console.log("\n-------------------------------------------------------\n");
    console.log("\nHola, este es mi equipo!\n");
    let equipo = new Equipo(1, "Avengers", "16/03/2022", crearlistajugadores());
    equipo.imprimir();
}
main();
