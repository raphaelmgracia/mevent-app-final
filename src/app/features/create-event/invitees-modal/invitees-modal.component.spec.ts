import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteesModalComponent } from './invitees-modal.component';

describe('InviteesModalComponent', () => {
  let component: InviteesModalComponent;
  let fixture: ComponentFixture<InviteesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteesModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
