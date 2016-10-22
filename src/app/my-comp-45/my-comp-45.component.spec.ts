/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp45Component } from './my-comp-45.component';

describe('MyComp45Component', () => {
  let component: MyComp45Component;
  let fixture: ComponentFixture<MyComp45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp45Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
