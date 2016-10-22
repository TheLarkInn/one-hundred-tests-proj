/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp37Component } from './my-comp-37.component';

describe('MyComp37Component', () => {
  let component: MyComp37Component;
  let fixture: ComponentFixture<MyComp37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp37Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
