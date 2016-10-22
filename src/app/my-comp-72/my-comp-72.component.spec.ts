/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp72Component } from './my-comp-72.component';

describe('MyComp72Component', () => {
  let component: MyComp72Component;
  let fixture: ComponentFixture<MyComp72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
