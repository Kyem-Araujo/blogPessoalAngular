import { Postagens } from "./Postagens"

export class User{
    public idUsuario:number
    public nome:string
    public usuario:string
    public senha: string
    public foto: string
    public tipo:string
    public postagens: Postagens[]
}