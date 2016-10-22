/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp89Component } from './my-comp-89.component';

describe('MyComp89Component', () => {
  let component: MyComp89Component;
  let fixture: ComponentFixture<MyComp89Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp89Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
