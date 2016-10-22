/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp33Component } from './my-comp-33.component';

describe('MyComp33Component', () => {
  let component: MyComp33Component;
  let fixture: ComponentFixture<MyComp33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
