import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/model/Aluno';
import { AlunoService } from 'src/app/servicos/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: Aluno[];

  constructor(private srv: AlunoService, private route: Router) { }

  //se local storage e token serve para verificar se tiver o token ele vai mandar fazer essas comparações
  ngOnInit() {
    if (localStorage.getItem("isiToken")) { // o if serve para verificar se existe o token no local storage
      this.srv.getAllAlunos().subscribe(  //aqui faz-se a requisição get no banco aluno 
        (res: Aluno[]) => {   //criar o arry com as informações que ele buscou(se o array tiver conteudo vai trazer a                     resposta)
          this.lista = res;
        },
        (err) => {
          this.route.navigate(['/inicio']);
        }
      );
    }
    else {
      this.route.navigate(['/inicio']);
    }
  }
}
