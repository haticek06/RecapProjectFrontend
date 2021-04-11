import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviAuthComponent } from './navi-auth.component';

describe('NaviAuthComponent', () => {
  let component: NaviAuthComponent;
  let fixture: ComponentFixture<NaviAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaviAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
