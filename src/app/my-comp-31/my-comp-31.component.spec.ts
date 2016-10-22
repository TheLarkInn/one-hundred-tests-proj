/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp31Component } from './my-comp-31.component';

describe('MyComp31Component', () => {
  let component: MyComp31Component;
  let fixture: ComponentFixture<MyComp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
