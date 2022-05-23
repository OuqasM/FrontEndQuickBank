import { Component, OnInit } from '@angular/core';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { ActionEventType } from 'src/app/state/product.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private eventdriverservice: EventDrivenService) { }

  ngOnInit(): void {
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


}
