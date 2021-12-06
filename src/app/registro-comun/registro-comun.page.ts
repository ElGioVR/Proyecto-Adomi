import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registro-comun',
  templateUrl: './registro-comun.page.html',
  styleUrls: ['./registro-comun.page.scss'],
})
export class RegistroComunPage implements OnInit {

  nombre: string;
  ubicacion: string;
  correo: string;
  password: string;
  constructor( private router: Router,private http: HttpClient ) { }

  ngOnInit() {
  }
  gologin(){
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }
  postDatos() {
    const datos = new URLSearchParams();
    datos.set('nombre', this.nombre);
    datos.set('ubicacion', this.ubicacion);
    datos.set('correo', this.correo);
    datos.set('pass', this.password);
    console.log(datos);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    const url = 'http://serfacil.atwebpages.com/registroController.php';
   this.http.post<any>(url, datos.toString(), options).subscribe((result)=>{
      console.log(result);
    },
    error =>{
      console.log(error);
    }
    );
  }
}
