/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp50Component } from './my-comp-50.component';

describe('MyComp50Component', () => {
  let component: MyComp50Component;
  let fixture: ComponentFixture<MyComp50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
