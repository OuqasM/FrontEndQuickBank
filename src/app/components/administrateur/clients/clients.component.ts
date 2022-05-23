import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/Client.model';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { ActionEvent, ActionEventType, AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  showedclients$:Observable<AppDataState<Client[]>>|null = null;
  readonly DataStateEnum = DataStateEnum;


  constructor(private eventdriverservice: EventDrivenService) { }

  ngOnInit(): void {
    console.log("ana hnaa");

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
