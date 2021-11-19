import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  url: string="https://api.whatsapp.com/send?l=es&phone=(+52)6642682908&text=Descripcion:Persona Interesada En Servicio";
  searchTerm: string;
  provedors =
  [ ];

  constructor(private http: HttpClient){
    this.prepareRequest().subscribe(
      data=>{
        const jsonData =JSON.parse(JSON.stringify(data));
        this.provedors=jsonData.Servicio;
        //prueba
        console.log(this,this.provedors);

    }
    );
  }
  prepareRequest(): Observable<unknown>{
    const apiUrl='http://serfacil.atwebpages.com/servicioController.php';
    return this.http.get(apiUrl);
  }
}


