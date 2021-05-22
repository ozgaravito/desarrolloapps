import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMatchComponent } from './contacto-match.component';

describe('ContactoMatchComponent', () => {
  let component: ContactoMatchComponent;
  let fixture: ComponentFixture<ContactoMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
