/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp17Component } from './my-comp-17.component';

describe('MyComp17Component', () => {
  let component: MyComp17Component;
  let fixture: ComponentFixture<MyComp17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
