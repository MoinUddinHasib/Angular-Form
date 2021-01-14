import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  utenti

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.utenti = this.userService.getUtenti()
  }

}
