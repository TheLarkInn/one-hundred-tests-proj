/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyComp28Component } from './my-comp-28.component';

describe('MyComp28Component', () => {
  let component: MyComp28Component;
  let fixture: ComponentFixture<MyComp28Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp28Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
