/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp16Component } from './my-comp-16.component';

describe('MyComp16Component', () => {
  let component: MyComp16Component;
  let fixture: ComponentFixture<MyComp16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
