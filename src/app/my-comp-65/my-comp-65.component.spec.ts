/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp65Component } from './my-comp-65.component';

describe('MyComp65Component', () => {
  let component: MyComp65Component;
  let fixture: ComponentFixture<MyComp65Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp65Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
