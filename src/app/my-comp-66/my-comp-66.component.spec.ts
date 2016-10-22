/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp66Component } from './my-comp-66.component';

describe('MyComp66Component', () => {
  let component: MyComp66Component;
  let fixture: ComponentFixture<MyComp66Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp66Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
