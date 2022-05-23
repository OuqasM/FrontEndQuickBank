import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/Client.model";


@Injectable({providedIn: "root"})
export class ClientServie {

    host: "http://127.0.0.1:8080"

    constructor(private http : HttpClient){
    }

    clients():Observable<Client[]>{
        return this.http.get<Client[]>(this.host+"/client")
    }

}