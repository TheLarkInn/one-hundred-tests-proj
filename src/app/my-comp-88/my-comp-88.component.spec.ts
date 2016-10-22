/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp88Component } from './my-comp-88.component';

describe('MyComp88Component', () => {
  let component: MyComp88Component;
  let fixture: ComponentFixture<MyComp88Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp88Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
