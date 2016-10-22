/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp23Component } from './my-comp-23.component';

describe('MyComp23Component', () => {
  let component: MyComp23Component;
  let fixture: ComponentFixture<MyComp23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
