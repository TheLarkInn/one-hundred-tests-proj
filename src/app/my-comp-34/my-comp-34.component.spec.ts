/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp34Component } from './my-comp-34.component';

describe('MyComp34Component', () => {
  let component: MyComp34Component;
  let fixture: ComponentFixture<MyComp34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp34Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
