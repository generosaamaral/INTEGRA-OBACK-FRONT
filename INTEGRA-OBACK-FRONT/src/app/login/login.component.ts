import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicos/usuario.service';
import { Usuario } from '../model/Usuario'
import { Token } from '../model/Token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mensagem: number;
  private usuario: Usuario = new Usuario();

  constructor(private srv: UsuarioService, private router: Router) {
    this.mensagem = 0;
  }

  ngOnInit() {
    if (localStorage.getItem("isiToken")) {
      this.router.navigate(['/listagem']);
    }

  }

  enviarDados() {
    this.srv.autenticar(this.usuario).subscribe(
      (res: Token) => {
        // se deu certo        
        // armazeno o token no LocalStorage
        localStorage.setItem("isiToken", res.strToken);
        // indico mensagem = 0 para não exibir a mensagem de erro
        this.mensagem = 0;
        // navego para a página LISTAGEM
        this.router.navigate(['/listagem']);
      },
      (err) => {
        // aqui indico mensagem = 1 para exibir a mensagem de erro
        this.mensagem = 1;
      }
    );
  }

}
