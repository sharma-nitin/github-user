import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GithubUserlistComponent } from './github-userlist/github-userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchUsersComponent } from './search-users/search-users.component';
import { GithubUserdetailComponent } from './github-userdetail/github-userdetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserlistComponent,
    SearchUsersComponent,
    GithubUserdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
