import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExperienceComponent } from './skills-experience.component';

describe('SkillsExperienceComponent', () => {
  let component: SkillsExperienceComponent;
  let fixture: ComponentFixture<SkillsExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
