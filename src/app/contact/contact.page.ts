import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
  nom: string;
  asu: string;
  des: string;
 
  countrycode:string="52";
  whatsappnumber:string="6642040070";
  text:string="Como"
  url:string="https://wa.me/"+this.countrycode+this.whatsappnumber+"?text='gio contratar tutor'";
  constructor() { }
  prueba(){
    console.log(this.nom);
    console.log(this.asu);
    console.log(this.des);
  }
}