import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registro-comun',
  templateUrl: './registro-comun.page.html',
  styleUrls: ['./registro-comun.page.scss'],
})
export class RegistroComunPage implements OnInit {

 constructor( private router: Router) { }

  ngOnInit() {
  }
  Registro(){
    this.router.navigate(['/register'])
  }
  goIncioSession(){
    this.router.navigate(['/login'])
  }
}
