/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp73Component } from './my-comp-73.component';

describe('MyComp73Component', () => {
  let component: MyComp73Component;
  let fixture: ComponentFixture<MyComp73Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp73Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
