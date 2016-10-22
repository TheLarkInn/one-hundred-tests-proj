/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp80Component } from './my-comp-80.component';

describe('MyComp80Component', () => {
  let component: MyComp80Component;
  let fixture: ComponentFixture<MyComp80Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp80Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
