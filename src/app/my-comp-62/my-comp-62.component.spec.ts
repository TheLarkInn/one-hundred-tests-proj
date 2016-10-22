/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp62Component } from './my-comp-62.component';

describe('MyComp62Component', () => {
  let component: MyComp62Component;
  let fixture: ComponentFixture<MyComp62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
