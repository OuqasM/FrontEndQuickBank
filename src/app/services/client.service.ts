import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/Client.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn: "root"})
export class ClientService {

    host = environment.host;

    constructor(private http : HttpClient){
    }

    clients():Observable<Client[]>{
        return this.http.get<Client[]>(this.host+"/client")
    }
    client(id: number):Observable<Client>{
        return this.http.get<Client>(this.host+"/client/"+id)
    }
    ajouterclient(data : any):Observable<Client>{
        return this.http.post<Client>(this.host+"/client",data)
    }

}