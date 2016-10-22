/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp64Component } from './my-comp-64.component';

describe('MyComp64Component', () => {
  let component: MyComp64Component;
  let fixture: ComponentFixture<MyComp64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
