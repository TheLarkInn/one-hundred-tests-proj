/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp21Component } from './my-comp-21.component';

describe('MyComp21Component', () => {
  let component: MyComp21Component;
  let fixture: ComponentFixture<MyComp21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
