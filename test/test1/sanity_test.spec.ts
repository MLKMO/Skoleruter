
import {
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {AppComponent} from './../../app/app.component'

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [AppComponent],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
       TestBed.compileComponents();
  }));

describe('universal truths', () => {
  it('should do math', () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });

  xit('should skip this', () => {
    expect(4).toEqual(40);
  });
});
