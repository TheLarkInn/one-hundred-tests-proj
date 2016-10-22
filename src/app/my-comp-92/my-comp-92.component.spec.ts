/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp92Component } from './my-comp-92.component';

describe('MyComp92Component', () => {
  let component: MyComp92Component;
  let fixture: ComponentFixture<MyComp92Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp92Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
