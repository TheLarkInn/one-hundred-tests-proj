/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp54Component } from './my-comp-54.component';

describe('MyComp54Component', () => {
  let component: MyComp54Component;
  let fixture: ComponentFixture<MyComp54Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp54Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
