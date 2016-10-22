/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp78Component } from './my-comp-78.component';

describe('MyComp78Component', () => {
  let component: MyComp78Component;
  let fixture: ComponentFixture<MyComp78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
