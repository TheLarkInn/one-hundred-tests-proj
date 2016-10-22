/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp22Component } from './my-comp-22.component';

describe('MyComp22Component', () => {
  let component: MyComp22Component;
  let fixture: ComponentFixture<MyComp22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
