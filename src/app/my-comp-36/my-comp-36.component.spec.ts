/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp36Component } from './my-comp-36.component';

describe('MyComp36Component', () => {
  let component: MyComp36Component;
  let fixture: ComponentFixture<MyComp36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
