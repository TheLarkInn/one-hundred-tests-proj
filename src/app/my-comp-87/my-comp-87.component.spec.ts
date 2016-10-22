/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp87Component } from './my-comp-87.component';

describe('MyComp87Component', () => {
  let component: MyComp87Component;
  let fixture: ComponentFixture<MyComp87Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp87Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
