/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp99Component } from './my-comp-99.component';

describe('MyComp99Component', () => {
  let component: MyComp99Component;
  let fixture: ComponentFixture<MyComp99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
