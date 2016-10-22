/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp25Component } from './my-comp-25.component';

describe('MyComp25Component', () => {
  let component: MyComp25Component;
  let fixture: ComponentFixture<MyComp25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
