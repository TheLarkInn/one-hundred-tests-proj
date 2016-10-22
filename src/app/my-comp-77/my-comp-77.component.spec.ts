/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp77Component } from './my-comp-77.component';

describe('MyComp77Component', () => {
  let component: MyComp77Component;
  let fixture: ComponentFixture<MyComp77Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp77Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
