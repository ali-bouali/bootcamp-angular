import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContactsComponent } from './manage-contacts.component';

describe('ManageContactsComponent', () => {
  let component: ManageContactsComponent;
  let fixture: ComponentFixture<ManageContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
