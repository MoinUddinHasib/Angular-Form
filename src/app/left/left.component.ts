import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import * as moment from 'moment';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private userService: UserService) { }

  stringsMustBeAvailable: ValidatorFn = control => {
    let usernames = this.userService.getUsername()
    for(let i of usernames){
      if(i==control.value){
        return {stringsMustBeAvailable: true};
      }
    }
    return null;
  };

  controllaPassword: ValidatorFn = (form: FormGroup) => {
    if (form.controls.password.value != form.controls.password2.value) {
      return {controllaPassword: true};
    }
    return null;
  };

  controllaData: ValidatorFn = control => {    
    if (moment(control.value)>moment()) {
      return {controllaData: true};
    }
    return null;
  };

  notUndefined: ValidatorFn = control => {  
    if (control.value==0) {
      return {notUndefined: true};
    }
    return null;
  };

  ruoli

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, this.stringsMustBeAvailable]),
    password: new FormControl('',[Validators.required]),
    password2: new FormControl(''),
    genere: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i)]),
    cf: new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i)]),
    dataNascita: new FormControl('',[Validators.required,this.controllaData]),
    ruolo: new FormControl(0,[this.notUndefined]),
  },[this.controllaPassword]);

  ngOnInit(): void {
    this.ruoli = this.userService.getRuoli()
  }

  onSubmit(input: any) {
    console.log("Utente inserito")
    this.userService.insertUser(this.userForm.value)
    this.userForm.reset()
  }

}
