/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp94Component } from './my-comp-94.component';

describe('MyComp94Component', () => {
  let component: MyComp94Component;
  let fixture: ComponentFixture<MyComp94Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp94Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
