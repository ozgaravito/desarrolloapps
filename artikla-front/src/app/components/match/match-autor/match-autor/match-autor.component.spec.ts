import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAutorComponent } from './match-autor.component';

describe('MatchAutorComponent', () => {
  let component: MatchAutorComponent;
  let fixture: ComponentFixture<MatchAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
