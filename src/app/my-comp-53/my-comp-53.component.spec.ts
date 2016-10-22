/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp53Component } from './my-comp-53.component';

describe('MyComp53Component', () => {
  let component: MyComp53Component;
  let fixture: ComponentFixture<MyComp53Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp53Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
