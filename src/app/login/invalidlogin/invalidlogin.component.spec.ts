import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidloginComponent } from './invalidlogin.component';

describe('InvalidloginComponent', () => {
  let component: InvalidloginComponent;
  let fixture: ComponentFixture<InvalidloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
