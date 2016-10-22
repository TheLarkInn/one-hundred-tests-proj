/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp61Component } from './my-comp-61.component';

describe('MyComp61Component', () => {
  let component: MyComp61Component;
  let fixture: ComponentFixture<MyComp61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
