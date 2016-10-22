/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp56Component } from './my-comp-56.component';

describe('MyComp56Component', () => {
  let component: MyComp56Component;
  let fixture: ComponentFixture<MyComp56Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp56Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
