import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css',
})
export class CriarPensamento {

  pensamento = {
    id:"1",
    conteudo:"Aprendendo a gozar",
    autoria:"eu mermo",
    modelo:"modelo2"
  }

  CriarPensamento(){
    alert("Novo pensamento");
  }

  CancelarPensamento(){
    alert("pensamento cancelado.");
  }

}
