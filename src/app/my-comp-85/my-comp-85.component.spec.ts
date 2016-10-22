/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp85Component } from './my-comp-85.component';

describe('MyComp85Component', () => {
  let component: MyComp85Component;
  let fixture: ComponentFixture<MyComp85Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp85Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
