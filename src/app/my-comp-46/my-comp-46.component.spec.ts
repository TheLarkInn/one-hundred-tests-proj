/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp46Component } from './my-comp-46.component';

describe('MyComp46Component', () => {
  let component: MyComp46Component;
  let fixture: ComponentFixture<MyComp46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp46Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
