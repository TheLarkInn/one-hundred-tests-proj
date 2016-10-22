/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp98Component } from './my-comp-98.component';

describe('MyComp98Component', () => {
  let component: MyComp98Component;
  let fixture: ComponentFixture<MyComp98Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp98Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
