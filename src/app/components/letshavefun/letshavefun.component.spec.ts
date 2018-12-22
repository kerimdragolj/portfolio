import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetshavefunComponent } from './letshavefun.component';

describe('LetshavefunComponent', () => {
  let component: LetshavefunComponent;
  let fixture: ComponentFixture<LetshavefunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetshavefunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetshavefunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
