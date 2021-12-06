import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-service-perfil',
  templateUrl: './service-perfil.page.html',
  styleUrls: ['./service-perfil.page.scss'],
})
export class ServicePerfilPage implements OnInit {

  perfilId: string;
  provedors;
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient ) { }

  ngOnInit() {
    this.perfilId = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpClient.get('http://serfacil.atwebpages.com/servicioController.php?id='+ this.perfilId).subscribe(res =>this.provedors= res);
  }

}
