import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private Http: HttpClient) { }
  public getAllAlunos(){
    let token = localStorage.getItem("isiToken");
    return this.Http.get("http://localhost/aluno/todos?token="+token);
  }


}
