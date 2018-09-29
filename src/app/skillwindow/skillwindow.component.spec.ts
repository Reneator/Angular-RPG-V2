import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillwindowComponent } from './skillwindow.component';

describe('SkillwindowComponent', () => {
  let component: SkillwindowComponent;
  let fixture: ComponentFixture<SkillwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
