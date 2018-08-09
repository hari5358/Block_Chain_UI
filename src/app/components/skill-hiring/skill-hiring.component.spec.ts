import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHiringComponent } from './skill-hiring.component';

describe('SkillHiringComponent', () => {
  let component: SkillHiringComponent;
  let fixture: ComponentFixture<SkillHiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillHiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
