import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { SkoleListeComponent} from'../../app/velgSkole/skoleListe.component';

let comp:    SkoleListeComponent;
let fixture: ComponentFixture<SkoleListeComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('BannerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SkoleListeComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(SkoleListeComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;


  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(comp.getSkoler()).toContain("Auglend Skole");
  });

});
