import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoiArgentComponent } from './envoi-argent.component';

describe('EnvoiArgentComponent', () => {
  let component: EnvoiArgentComponent;
  let fixture: ComponentFixture<EnvoiArgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoiArgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoiArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
