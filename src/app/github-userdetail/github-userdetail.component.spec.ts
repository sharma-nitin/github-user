import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserdetailComponent } from './github-userdetail.component';

describe('GithubUserdetailComponent', () => {
  let component: GithubUserdetailComponent;
  let fixture: ComponentFixture<GithubUserdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubUserdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
