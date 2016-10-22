/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp75Component } from './my-comp-75.component';

describe('MyComp75Component', () => {
  let component: MyComp75Component;
  let fixture: ComponentFixture<MyComp75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
