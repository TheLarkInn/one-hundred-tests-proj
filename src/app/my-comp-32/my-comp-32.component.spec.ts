/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp32Component } from './my-comp-32.component';

describe('MyComp32Component', () => {
  let component: MyComp32Component;
  let fixture: ComponentFixture<MyComp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
