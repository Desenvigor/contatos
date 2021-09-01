import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  private contatoService:ContatoService = new ContatoService()  
  contatos:Contato[]

  constructor() {
    this.contatos = this.contatoService.getContatos();
   }

  ngOnInit(): void {
  }

}
