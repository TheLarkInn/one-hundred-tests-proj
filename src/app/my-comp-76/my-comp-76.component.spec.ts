/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp76Component } from './my-comp-76.component';

describe('MyComp76Component', () => {
  let component: MyComp76Component;
  let fixture: ComponentFixture<MyComp76Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp76Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
