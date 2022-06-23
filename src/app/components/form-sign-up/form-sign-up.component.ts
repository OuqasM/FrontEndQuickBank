import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/Client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.css']
})
export class FormSignUpComponent implements OnInit {

  contactForm!: FormGroup;
  addedCleint !: Client
  constructor(private formBuilder: FormBuilder,private router: Router, private clientservice:ClientService) {
    this.createContactForm();
  }
  ngOnInit(): void {
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      mail: [''],
      username: [''],
      motdepasse: ['']
    });
  }

  onSubmit() {
      this.clientservice.ajouterclient(this.contactForm.value).subscribe((data)=> {
        this.addedCleint = data;
      })
      // console.log('Your form data : ', this.contactForm.value );
  }
}
