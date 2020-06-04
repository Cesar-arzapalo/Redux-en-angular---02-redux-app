import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorAction from './contador/contador.actions';
import { AppState } from './app.reducer';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'redux-app';
  contador: number;

  constructor(private store: Store<AppState>){
  }

  ngOnInit(){
    this.store.select('contador').subscribe(contador =>  this.contador = contador);
  }

  incrementar(){
    this.store.dispatch(contadorAction.incrementar());
  }

  decrementar(){
    this.store.dispatch(contadorAction.decrementar());
  }
}
