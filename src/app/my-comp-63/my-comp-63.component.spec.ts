/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp63Component } from './my-comp-63.component';

describe('MyComp63Component', () => {
  let component: MyComp63Component;
  let fixture: ComponentFixture<MyComp63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
