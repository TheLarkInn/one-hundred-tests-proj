/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp95Component } from './my-comp-95.component';

describe('MyComp95Component', () => {
  let component: MyComp95Component;
  let fixture: ComponentFixture<MyComp95Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp95Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
