import { Component } from '@angular/core';
import { SessionUser } from '../models/session-user';
import { DBService } from '../services/database/db.service';
import { GitLabService } from '../services/gitAPI/git-lab.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private sessionUser:SessionUser;

  constructor(private dbService: DBService) { 
    this.sessionUser= new SessionUser();

  }
  ngOnInit() {
    this.getUserSessionFromAPI();
  }
  getSessionUser(){
    return this.sessionUser;
  }
  getUserSessionFromAPI(){
    this.dbService.getUserSession().subscribe((user) =>{
      this.sessionUser= user;
  }); 
  }
  isAdmin():boolean{
      return this.sessionUser.isAdmin
  }
}
