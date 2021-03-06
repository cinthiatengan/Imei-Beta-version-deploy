import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://i-mei.herokuapp.com/usuario/logar', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://i-mei.herokuapp.com/usuario/cadastrar', user)

  }

  atualizar(user: User): Observable<User> {
    return this.http.put<User>('https://i-mei.herokuapp.com/usuario/atualizar', user)

  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`https://i-mei.herokuapp.com/usuario/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }
    return ok
  }

}
