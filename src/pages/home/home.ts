import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public precoGas:number;
  public precoEtanol:number;
  public razao:string;
  
  constructor(public navCtrl: NavController) {

  }
  calcula(){
    let calculo = this.precoEtanol/this.precoGas;
    this.razao = calculo.toString();
    if(calculo >= 0.75){
      this.razao = calculo.toString()+" Bote gai que é melhor";
    }else{
      this.razao = calculo.toString()+" Aico é melhor";
    }
  }
  limpar(){
    this.razao ="";
  }


}
