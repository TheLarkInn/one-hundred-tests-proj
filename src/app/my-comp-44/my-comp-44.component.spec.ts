/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp44Component } from './my-comp-44.component';

describe('MyComp44Component', () => {
  let component: MyComp44Component;
  let fixture: ComponentFixture<MyComp44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp44Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
