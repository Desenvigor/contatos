import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() emissor:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick(): void {
    console.log('Clicou add contato')
    this.emissor.emit();
  }
}
