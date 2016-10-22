/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp10Component } from './my-comp-10.component';

describe('MyComp10Component', () => {
  let component: MyComp10Component;
  let fixture: ComponentFixture<MyComp10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
