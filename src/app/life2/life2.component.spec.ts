import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Life2Component } from './life2.component';

describe('Life2Component', () => {
  let component: Life2Component;
  let fixture: ComponentFixture<Life2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Life2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Life2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
