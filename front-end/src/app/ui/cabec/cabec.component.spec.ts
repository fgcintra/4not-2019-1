import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecComponent } from './cabec.component';

describe('CabecComponent', () => {
  let component: CabecComponent;
  let fixture: ComponentFixture<CabecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
