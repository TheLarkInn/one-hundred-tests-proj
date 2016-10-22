/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp13Component } from './my-comp-13.component';

describe('MyComp13Component', () => {
  let component: MyComp13Component;
  let fixture: ComponentFixture<MyComp13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
