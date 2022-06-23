import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, RouterModule } from '@angular/router';
import { Client } from 'src/app/models/Client.model';
import { ClientService } from 'src/app/services/client.service';
import { DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-modifierclient',
  templateUrl: './modifierclient.component.html',
  styleUrls: ['./modifierclient.component.css']
})
export class ModifierclientComponent implements OnInit {

  clientId : any;
  // client : Client;
  constructor(private router : ActivatedRoute,private clientservice: ClientService) { }

  ngOnInit(): void {
    this.router.params.subscribe((data)=> {
      this.clientId = data.id;   
      this.clientservice.client(this.clientId).subscribe((s)=> {
        console.log(s);
        // this.client = s;
      })
    })
  }

}
