/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp29Component } from './my-comp-29.component';

describe('MyComp29Component', () => {
  let component: MyComp29Component;
  let fixture: ComponentFixture<MyComp29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
