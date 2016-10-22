/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp96Component } from './my-comp-96.component';

describe('MyComp96Component', () => {
  let component: MyComp96Component;
  let fixture: ComponentFixture<MyComp96Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp96Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
