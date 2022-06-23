import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from 'src/app/models/Client.model';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { ClientService } from 'src/app/services/client.service';
import { ActionEvent, ActionEventType, AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { map,startWith  , catchError } from 'rxjs/operators';




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  showedclients$:Observable<AppDataState<Client[]>>|null = null;
  readonly DataStateEnum = DataStateEnum;

  displayedColumns: string[] = ['id', 'nom', 'prenom', 'mail','username','motdepasse'];
  dataSource = this.showedclients$;


  constructor(private eventdriverservice: EventDrivenService, private clientService:ClientService) { }

  ngOnInit(): void {
    console.log("ana hnaa");

    this.showedclients$ = this.clientService.clients().pipe(
      map(data => ({dataState : DataStateEnum.LOADED , data : data})),
      startWith({dataState : DataStateEnum.LOADING}),
      catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
    );

    this.eventdriverservice.sourceEventSubjectObservbale.subscribe((action:ActionEvent)=> {
      this.action(action);
    })
  }

  onGetAllClients(){
    this.eventdriverservice.publishEvent({type : ActionEventType.ADMIN_ALL_CLIENTS,data : null})
  }

  onGetClientsDesireSupprimer(){

  }

  onGetClientsNonConfirmer(){

  }

  onSearsh(value:String){

  }



  allClient(){
    console.log("ana f allClient d clients compo")
  }
  
  action(event : ActionEvent){

    console.log("ana hnaa");

    switch (event.type) {
      case ActionEventType.ADMIN_ALL_CLIENTS:
            this.allClient();
      break;
      case ActionEventType.ADMIN_CONFIRME_CLIENT_SUPPRESSION:
          console.log("all o=want to be deleted")
      break;
      
      default:
        break;
    }
  }

}
