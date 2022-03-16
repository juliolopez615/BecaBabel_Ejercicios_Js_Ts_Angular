En un principio había creado varios archivos para las diferentes clases. (Ejercicio8Historial.ts, Ejercicio8Jugador.ts,
Ejercicio8Equipo.ts) pero me daba un error porque no estaba utilizando un modulo de js. Entonces como no sabía muy bien
como importar las clases (lo estaba haciendo con export class{} en la definición de la clase y luego con
import { Jugador (por ejemplo) } from '.\Ejercicicio8Jugador') 

De esta forma no me daba fallo pero a la hora de ejecutar el node Ejercicio8main.js me daba error en el modulo.
Lo he intentado arreglar añadiendo cosas al tsconfig o al package.json(type:module) pero nada. Y a falta de 
perder más tiempo lo que he hecho es meter las clases en el archivo Ejercico8main.ts y ya me ha funcionado todo
correctamente como era esperado.