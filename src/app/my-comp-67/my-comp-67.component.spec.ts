/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp67Component } from './my-comp-67.component';

describe('MyComp67Component', () => {
  let component: MyComp67Component;
  let fixture: ComponentFixture<MyComp67Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp67Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
