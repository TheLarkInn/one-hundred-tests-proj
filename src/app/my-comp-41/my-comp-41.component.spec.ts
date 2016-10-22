/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp41Component } from './my-comp-41.component';

describe('MyComp41Component', () => {
  let component: MyComp41Component;
  let fixture: ComponentFixture<MyComp41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
