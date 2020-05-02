import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { GithubUsersService } from '../services-module/github-users.service';

@Component({
  selector: 'app-github-userlist',
  templateUrl: './github-userlist.component.html',
  styleUrls: ['./github-userlist.component.scss']
})
export class GithubUserlistComponent implements OnInit {
  userList: any;
  filteredUsers: any;
  @Output() selectedUser = new EventEmitter<string>();
  selected: string;
  constructor(private githubuserService: GithubUsersService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.githubuserService.fetchAllUsers().subscribe((res: any) => {
      this.userList = res;
      this.filteredUsers = [...this.userList]
      console.log(this.userList);
      this.selected = this.userList[0].login;
      this.selectedUser.emit(this.userList[0]);
    });
  }

  /**
   * outputting selected user
   * @param userData
   */
  userSelected(userData: any) {
    this.selected = userData.login;
    this.selectedUser.emit(userData);
  }

  /**
   * Searched users based on search input
   * @param searchvalue
   */
  searchedUsers(searchvalue: string) {
    this.filteredUsers = [...this.userList];
    this.filteredUsers = this.userList.filter((user: any) => {
      if (user.login.toLowerCase().includes(searchvalue.toLowerCase())) {
        return user;
      }
    });
    this.cd.markForCheck();
  }

}
