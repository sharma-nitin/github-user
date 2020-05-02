import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github-project';
  user: any;

 /**
  * passing selected user from list to detail component
  * @param userName
  */
 selectedUser(userName: string){
   this.user = userName;
  }
}


