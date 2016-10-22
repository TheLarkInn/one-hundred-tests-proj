/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp30Component } from './my-comp-30.component';

describe('MyComp30Component', () => {
  let component: MyComp30Component;
  let fixture: ComponentFixture<MyComp30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
