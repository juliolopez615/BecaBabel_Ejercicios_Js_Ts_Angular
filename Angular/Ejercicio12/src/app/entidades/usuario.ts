
 export class Usuario {
    static token = 0
    static userNAme = ""
    constructor(private _usuario: string, private _password: string) {
    
    }
    
    public get usuario(): string {
        return this._usuario;
    }
    public set usuario(value: string) {
        this._usuario = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

    public toString() : string {
        return `Usuario: ${this._usuario}, Password: ${this._password}`
    }
    
}