import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserlistComponent } from './github-userlist.component';

describe('GithubUserlistComponent', () => {
  let component: GithubUserlistComponent;
  let fixture: ComponentFixture<GithubUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
