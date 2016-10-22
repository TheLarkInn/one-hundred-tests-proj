/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp24Component } from './my-comp-24.component';

describe('MyComp24Component', () => {
  let component: MyComp24Component;
  let fixture: ComponentFixture<MyComp24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
