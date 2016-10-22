/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp20Component } from './my-comp-20.component';

describe('MyComp20Component', () => {
  let component: MyComp20Component;
  let fixture: ComponentFixture<MyComp20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
