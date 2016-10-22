/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp48Component } from './my-comp-48.component';

describe('MyComp48Component', () => {
  let component: MyComp48Component;
  let fixture: ComponentFixture<MyComp48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp48Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
