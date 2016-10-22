/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp27Component } from './my-comp-27.component';

describe('MyComp27Component', () => {
  let component: MyComp27Component;
  let fixture: ComponentFixture<MyComp27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
