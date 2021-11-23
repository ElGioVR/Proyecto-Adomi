import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage  {

  constructor( private router: Router) { }



  goIncioSession(){
    this.router.navigate(['/login'])
  }
  goIncioRegistro(){
    this.router.navigate(['/register'])
  }
  goIncioRegistroComun(){
    this.router.navigate(['/registro-comun'])
  }
}
