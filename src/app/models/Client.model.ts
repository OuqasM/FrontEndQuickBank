import { Compte } from "./Compte.model";

export interface Client{
    id:number,
	nom:string,
	prenom:string,
	mail:string,
	username:string,
	motdepasse:string,
	comptes:Compte[]
}