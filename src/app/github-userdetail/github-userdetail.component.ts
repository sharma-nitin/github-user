import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { GithubUsersService } from '../services-module/github-users.service';

@Component({
  selector: 'app-github-userdetail',
  templateUrl: './github-userdetail.component.html',
  styleUrls: ['./github-userdetail.component.scss']
})
export class GithubUserdetailComponent implements OnInit, OnChanges {
  @Input() selectedUser: any;
  userRepos: any;
  
  constructor(private githubuserService: GithubUsersService) { }

  /**
   * on changes to detect change in selected user and to fetch its repositories
   * @param changes
   */
  ngOnChanges(changes) {
  if (changes.selectedUser) {
    this.getRepositories(this.selectedUser.repos_url);
  }
  }

  ngOnInit() {
  }

  /**
   * Gets repositories of selected user
   * @param url
   */
  getRepositories(url: string) {
   this.githubuserService.fetchUserRepositories(url).subscribe((res: any) => {
     this.userRepos = res;
   });
  }

}
