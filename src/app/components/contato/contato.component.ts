import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../../models/Contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  @Input() contato!:Contato;

  constructor() { }

  ngOnInit(): void {
  }

}
