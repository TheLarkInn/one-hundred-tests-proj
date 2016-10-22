/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp86Component } from './my-comp-86.component';

describe('MyComp86Component', () => {
  let component: MyComp86Component;
  let fixture: ComponentFixture<MyComp86Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp86Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
