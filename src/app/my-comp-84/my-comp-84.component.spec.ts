/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp84Component } from './my-comp-84.component';

describe('MyComp84Component', () => {
  let component: MyComp84Component;
  let fixture: ComponentFixture<MyComp84Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp84Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
