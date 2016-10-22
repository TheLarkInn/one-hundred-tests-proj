/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp18Component } from './my-comp-18.component';

describe('MyComp18Component', () => {
  let component: MyComp18Component;
  let fixture: ComponentFixture<MyComp18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
