import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  nom: string;
  descripcion: string;
  tipo: string;
  ubicacion: string;
  imagen: string;
  telefono: string;

  constructor( private router: Router,private http: HttpClient ) { }

  ngOnInit() {
  }
  gologin(){
    this.router.navigate(['/login']);
  }
  goregister(){
    this.router.navigate(['/register']);
  }
  postDatos() {
    const datos = new URLSearchParams();
    datos.set('nombre', this.nom);
    datos.set('descripcion', this.descripcion );
    datos.set('tipo', this.tipo );
    datos.set('ubicacion', this.ubicacion);
    datos.set('imagen', this.imagen);
    datos.set('telefono', this.telefono);
    console.log(datos);
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    const url = 'http://serfacil.atwebpages.com/servicioController.php';
   this.http.post<any>(url, datos.toString(), options).subscribe((result)=>{
      console.log(result);
      console.log(datos);
    },
    error =>{
      console.log(error);
    }
    );
  }
}
