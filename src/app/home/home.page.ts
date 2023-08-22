import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  valor = "0";
  operacao = "";
  memoria = "0";
  porcento = "100";

  mostravalor(opcao) {

    if (this.valor == "0") {
      this.valor = opcao;
    } else {
      this.valor = this.valor + opcao;
    }
  }

  botaoponto() {
    if (this.valor.indexOf(".") == -1) {
      if (this.valor == "0") {
        this.mostravalor("0.");

      } else {
        this.mostravalor(".");
      }

    }
  }

  calcular(parametro_metodo) {
    if (this.operacao != "") {
      if (this.operacao == "+") {
        //Incluir o calculo de mais
        this.memoria = (parseFloat(this.memoria) + parseFloat(this.valor)).toString();
      } else if (this.operacao == "-") {
        this.memoria = (parseFloat(this.memoria) - parseFloat(this.valor)).toString();
      } else if (this.operacao == "*") {
        this.memoria = (parseFloat(this.memoria) * parseFloat(this.valor)).toString();
      } else if (this.operacao == "/") {
        this.memoria = (parseFloat(this.memoria) / parseFloat(this.valor)).toString();
        if (parseFloat(this.valor) != 0) {
        }
      } else if (this.operacao == "M") {
        this.memoria = (parseFloat(this.memoria) * parseFloat('221072057')).toString();
      } else if (this.operacao == "√") {
        this.memoria = Math.sqrt(parseFloat(this.memoria)).toString();
        //this.memoria = (parseFloat(this.memoria) ** parseFloat('0.5')).toString(); <- Também funciona
      } else if (this.operacao == "X^y") {
        this.memoria = (parseFloat(this.memoria) ** parseFloat(this.valor)).toString();
      } else if (this.operacao == "%") {
        this.memoria = (parseFloat(this.memoria) * parseFloat(this.valor) / parseFloat(this.porcento)).toString();
      }


    } else {
      this.memoria = this.valor
    }
    this.operacao = parametro_metodo;
    if (parametro_metodo == "") {
      this.valor = this.memoria
      this.memoria = "0";
    } else {
      this.valor = "0";
    }



  }
  btLimpar() {
    this.valor = "0";
    this.memoria = "";
    this.operacao = "";
  }

  constructor() { }

}

