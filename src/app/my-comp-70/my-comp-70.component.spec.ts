/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp70Component } from './my-comp-70.component';

describe('MyComp70Component', () => {
  let component: MyComp70Component;
  let fixture: ComponentFixture<MyComp70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
