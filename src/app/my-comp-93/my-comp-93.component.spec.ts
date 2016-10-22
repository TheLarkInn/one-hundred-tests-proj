/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp93Component } from './my-comp-93.component';

describe('MyComp93Component', () => {
  let component: MyComp93Component;
  let fixture: ComponentFixture<MyComp93Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp93Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
