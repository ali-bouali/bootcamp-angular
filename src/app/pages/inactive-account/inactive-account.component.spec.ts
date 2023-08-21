import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveAccountComponent } from './inactive-account.component';

describe('InactiveAccountComponent', () => {
  let component: InactiveAccountComponent;
  let fixture: ComponentFixture<InactiveAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
