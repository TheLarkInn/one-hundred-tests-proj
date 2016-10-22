/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp71Component } from './my-comp-71.component';

describe('MyComp71Component', () => {
  let component: MyComp71Component;
  let fixture: ComponentFixture<MyComp71Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp71Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
