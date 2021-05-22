import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisMatchsComponent } from './mis-matchs.component';

describe('MisMatchsComponent', () => {
  let component: MisMatchsComponent;
  let fixture: ComponentFixture<MisMatchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisMatchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisMatchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
