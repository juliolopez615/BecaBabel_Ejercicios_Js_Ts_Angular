
export class Videojuego{
    private _id:number|string = 0;
    private _titulo = "";
    private _comp = "";
    private _valoracion:number|string = 0;
    
    public get id() {
        return this._id;
    }
    public set id(value) {
        this._id = value;
    }
    public get titulo() {
        return this._titulo;
    }
    public set titulo(value) {
        this._titulo = value;
    }
    
    public get comp() {
        return this._comp;
    }
    public set comp(value) {
        this._comp = value;
    }
    
    public get valoracion() {
        return this._valoracion;
    }
    public set valoracion(value) {
        this._valoracion = value;
    }

    
    constructor(id:number|string, titulo:string, compañia:string, valoracion:number|string){
        this._id = id
        this._titulo = titulo
        this._comp = compañia
        this._valoracion = valoracion
    
    }

    public toString() : string {
        return `ID: ${this._id}, Titulo: ${this._titulo}, Compañia: ${this._comp}, Valoracion: ${this._valoracion}`
    }
}