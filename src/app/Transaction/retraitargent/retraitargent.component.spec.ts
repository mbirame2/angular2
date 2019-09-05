import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitargentComponent } from './retraitargent.component';

describe('RetraitargentComponent', () => {
  let component: RetraitargentComponent;
  let fixture: ComponentFixture<RetraitargentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitargentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitargentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
