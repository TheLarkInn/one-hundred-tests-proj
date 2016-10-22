/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp55Component } from './my-comp-55.component';

describe('MyComp55Component', () => {
  let component: MyComp55Component;
  let fixture: ComponentFixture<MyComp55Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp55Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
