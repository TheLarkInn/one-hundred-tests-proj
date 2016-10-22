/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp14Component } from './my-comp-14.component';

describe('MyComp14Component', () => {
  let component: MyComp14Component;
  let fixture: ComponentFixture<MyComp14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp14Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
