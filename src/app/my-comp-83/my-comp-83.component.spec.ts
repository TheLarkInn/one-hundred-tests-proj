/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp83Component } from './my-comp-83.component';

describe('MyComp83Component', () => {
  let component: MyComp83Component;
  let fixture: ComponentFixture<MyComp83Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp83Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
