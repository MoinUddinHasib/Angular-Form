import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usernames: string[] = ["Pippo","Pluto","Paperino"]

  ruoli = ['benzina', 'diesel', 'gpl']

  constructor() { }

  public getRuoli() {
    return this.ruoli
  }

  public getUsername() {
    return this.usernames
  }

  public insertUsername(username: string) {
    this.usernames.push(username)
  }
}
