/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp12Component } from './my-comp-12.component';

describe('MyComp12Component', () => {
  let component: MyComp12Component;
  let fixture: ComponentFixture<MyComp12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
