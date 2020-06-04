import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as contadorAction from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  multiplicar(){
    this.store.dispatch(contadorAction.multiplicar({ numero: 2 }));
  }

  dividir(){
    this.store.dispatch(contadorAction.dividir({ numero: 2 }));
  }

}
