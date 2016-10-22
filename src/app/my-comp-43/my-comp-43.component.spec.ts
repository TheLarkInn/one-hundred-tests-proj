/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp43Component } from './my-comp-43.component';

describe('MyComp43Component', () => {
  let component: MyComp43Component;
  let fixture: ComponentFixture<MyComp43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp43Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
