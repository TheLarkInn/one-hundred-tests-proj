/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp91Component } from './my-comp-91.component';

describe('MyComp91Component', () => {
  let component: MyComp91Component;
  let fixture: ComponentFixture<MyComp91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
