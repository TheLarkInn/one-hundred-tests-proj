/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp82Component } from './my-comp-82.component';

describe('MyComp82Component', () => {
  let component: MyComp82Component;
  let fixture: ComponentFixture<MyComp82Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp82Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
