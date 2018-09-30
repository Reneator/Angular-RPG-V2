import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterwindowComponent } from './characterwindow.component';

describe('CharacterwindowComponent', () => {
  let component: CharacterwindowComponent;
  let fixture: ComponentFixture<CharacterwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
