import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { NesteFridagComponent } from './../../app/nestefridag/neste-fridag.component';
import { ValgteSkolerService } from './../../app/valgteSkoler.service';
import { NesteFridagService } from './../../app/nestefridag/neste-fridag.service';
import { DatoPipe } from './../../app/nestefridag/dato.pipe';

let comp:    NesteFridagComponent;
let fixture: ComponentFixture<NesteFridagComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('NesteFridagComponent', () => {
    beforeEach( async(() => 
    { 
        TestBed.configureTestingModule
        ({
            declarations: [ NesteFridagComponent, DatoPipe ],
            providers: [NesteFridagService, ValgteSkolerService]
        }).compileComponents(); 
    }));
    beforeEach(() => 
    {
        fixture = TestBed.createComponent(NesteFridagComponent);
        comp    = fixture.componentInstance;
        de  = fixture.debugElement.query(By.css('.panel-title'));
        el = de.nativeElement;
    });

    it('Skal vise tittel på panelet', () => 
    {
    expect(el.textContent).toContain('Neste fridag for valgte skoler');
    });
});


