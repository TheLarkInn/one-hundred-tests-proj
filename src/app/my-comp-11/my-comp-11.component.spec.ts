/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp11Component } from './my-comp-11.component';

describe('MyComp11Component', () => {
  let component: MyComp11Component;
  let fixture: ComponentFixture<MyComp11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
