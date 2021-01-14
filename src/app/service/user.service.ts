import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usernames: string[] = ["Pippo","Pluto","Paperino"]

  utenti: any[] = []

  ruoli = ['GUEST', 'ADMIN', 'USER']

  constructor() { }

  public getRuoli() {
    return this.ruoli
  }

  public getUsername() {
    return this.usernames
  }

  public getUtenti() {
    return this.utenti
  }

  public insertUser(form: any) {
    this.usernames.push(form.username)
    this.utenti.push(form)
  }
}
