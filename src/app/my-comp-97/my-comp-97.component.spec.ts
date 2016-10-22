/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp97Component } from './my-comp-97.component';

describe('MyComp97Component', () => {
  let component: MyComp97Component;
  let fixture: ComponentFixture<MyComp97Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp97Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
