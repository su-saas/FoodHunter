import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTagPriorityComponent } from './current-tag-priority.component';

describe('CurrentTagPriorityComponent', () => {
  let component: CurrentTagPriorityComponent;
  let fixture: ComponentFixture<CurrentTagPriorityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentTagPriorityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTagPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
