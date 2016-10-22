/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp51Component } from './my-comp-51.component';

describe('MyComp51Component', () => {
  let component: MyComp51Component;
  let fixture: ComponentFixture<MyComp51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
