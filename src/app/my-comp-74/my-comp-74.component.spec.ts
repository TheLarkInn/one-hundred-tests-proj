/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp74Component } from './my-comp-74.component';

describe('MyComp74Component', () => {
  let component: MyComp74Component;
  let fixture: ComponentFixture<MyComp74Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp74Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
