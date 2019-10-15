import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterAccountsTableComponent } from './twitter-accounts-table.component';

describe('TwitterAccountsTableComponent', () => {
  let component: TwitterAccountsTableComponent;
  let fixture: ComponentFixture<TwitterAccountsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterAccountsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterAccountsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
