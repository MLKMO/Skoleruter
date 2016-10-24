import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Test av testing', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
          declarations: [],
          schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
       TestBed.compileComponents();
  });

  it('Skal gjøre matten', () => {
    expect(1 + 1).toEqual(2);

    expect(5).toBeGreaterThan(4);
  });

  xit('Skal droppe denne (xit)', () => {
    expect(4).toEqual(4);
  });
});
