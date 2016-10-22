/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp68Component } from './my-comp-68.component';

describe('MyComp68Component', () => {
  let component: MyComp68Component;
  let fixture: ComponentFixture<MyComp68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
